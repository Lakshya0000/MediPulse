import User from "../model/user.js";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
import Doctor from "../model/doctor.js";

configDotenv();

const userValidation = async (req, res, next) => {
	const token = req.cookies.token;
	console.log(token);
	if (!token) {
		return res.status(401).json({ message: "No Token" });
	}
	jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
		if (err) {
			return res.status(401).json({ message: "Technical Error" });
		}

		const user = await User.findById(data.id);
		if (!user) {
			const doctor = await Doctor.findById(data.id);
			if (!doctor) {
				return res.status(401).json({ message: "Unauthorized" });
			}
		}

    next();
		// return res.json({
		// 	message: "Authorized",
		// });
	});
};

export default userValidation;
