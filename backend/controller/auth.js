import User from "../model/user.js";
import Doctor from "../model/doctor.js";
import { createSecret } from "../util/createSecret.js";
import bcrypt from "bcryptjs";
import { configDotenv } from "dotenv";
import jwt from "jsonwebtoken";
configDotenv()

const cookieOptions = {
    httpOnly: false,
    secure: true,
    sameSite: 'none',
};
const userSignup = async (req, res, next) => {
	const {
		firstName,
		lastName,
		email,
		password,
		gender,
		bio,
		phone,
		primaryCondition,
		emergencyContact,
		emergencyRelation,
		emergencyPhone,
	} = req.body;
	console.log(req.body);
	if (!firstName || !email || !password || !gender) {
		return res.json({
			message: "FirstName, Email, Password and Gender are required",
			firstName,
			email,
			password,
			gender
		});
	}

	if (password.len < 8) {
		return res.json({ message: "Password must be atleast 8 long" });
	}

	const existingUser = await User.findOne({ email });
	if (existingUser) {
		return res.json({ message: "User already exists" });
	}

	const result = await User.create({
		firstName: firstName,
		lastName: lastName,
		password: password,
		email: email,
		phone: phone,
		bio: bio,
		medical: {
			primaryCondition: primaryCondition,
		},
		emergencyContact: {
			name: emergencyContact,
			relation: emergencyRelation,
			phone: emergencyPhone,
		},
		gender: gender,
	});

	const token = createSecret(result._id,"user");
	res.cookie("token", token, cookieOptions);
	res.cookie("id", result._id, cookieOptions);
	res
		.status(201)
		.json({ message: "User signed in successfully", success: true, result });
	next();
};

const userLogin = async (req, res) => {
	const { email, password } = req.body;
	if (!email || !password) {
		return res.json({ message: "Email and password are required" });
	}

	const user = await User.findOne({ email });
	if (!user) {
		return res.json({ message: "User does not exist" });
	}
	const auth = await bcrypt.compare(password, user.password);
	if (!auth) {
		return res.json({ message: "Incorrect password" });
	}
	const token = createSecret(user._id,"user");
	res.cookie("token", token, cookieOptions);
	res.cookie("id", user._id, cookieOptions);
	res.status(201).json({ message: "User logged in successfully", success: true, result: user });
};

const doctorSignup = async (req, res, next) => {
	const {
		firstName,
		lastName,
		email,
		password,
		gender,
		bio,
		years,
		expertise,
		clinicName,
		clinicPhone,
		clinicLocation,
		phone,
	} = req.body;
	if (!firstName || !email || !password || !gender || !expertise || !years) {
		return res.json({
			message:
				"FirstName, Email, Password, Gender, Expertise and Years are required",
		});
	}

	if (password.len < 8) {
		return res.json({ message: "Password must be atleast 8 long" });
	}

	const existingUser = await Doctor.findOne({ email });
	if (existingUser) {
		return res.json({ message: "Doctor already exists" });
	}

	const result = await Doctor.create({
		firstName: firstName,
		lastName: lastName,
		password: password,
		email: email,
		phone: phone,
		bio: bio,
		gender: gender,
		experience: {
			years: years,
			expertise: expertise,
		},
		clinic: {
			location: clinicLocation,
			phone: clinicPhone,
			name: clinicName,
		},
	});

	const token = createSecret(result._id,"doctor");
	res.cookie("token", token, cookieOptions);
	res.cookie("id", result._id, cookieOptions);
	res
		.status(201)
		.json({ message: "Doctor signed in successfully", success: true, result });
	next();
};

const doctorLogin = async (req, res) => {
	const { email, password } = req.body;
	if (!email || !password) {
		return res.json({ message: "Email and password are required" });
	}

	const doctor = await Doctor.findOne({ email });
	if (!doctor) {
		return res.json({ message: "Doctor does not exist" });
	}
	const auth = await bcrypt.compare(password, doctor.password);
	if (!auth) {
		return res.json({ message: "Incorrect password" });
	}
	const token = createSecret(doctor._id,"doctor");
	res.cookie("token", token, cookieOptions);
	res.cookie("id", doctor._id, cookieOptions);
	res.status(201).json({ message: "Doctor logged in successfully", success: true, result: doctor });
};

const Verifier = async (req,res) => {
	const token = req.cookies.token;
	if(!token){
		return res.status(401).json({message:"No Token"});
	}
	jwt.verify(token,process.env.TOKEN_KEY, async(err,data) => {
		if(err){
			return res.status(401).json({message:"Expired or Invalid Token"});
		}
		const user = await (data.role === "user" ? User : Doctor).findById(data.id);
		if(!user){
			return res.status(401).json({message:"Unauthorized"});
		}
		res.status(200).json({message:"Authorized",data:user,role:data.role});
	})
}

export { userLogin, userSignup, doctorLogin, doctorSignup, Verifier };
