import Message from "../model/message.js";
import User from "../model/user.js";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
import Community from "../model/community.js";

configDotenv();

const createMessage = async (req, res) => {
	const token = req.cookies.token;
	if (!token) {
		return res.status(401).json({ message: "Unauthorized" });
	}
	jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
		if (err) {
			return res.status(401).json({ message: "Unauthorized" });
		}

		const user = await User.findById(data.id);
		if (!user) {
			return res.status(401).json({ message: "Unauthorized" });
		}

		const { content, id } = req.body;
		if (!content || !id) {
			return res.json({ message: "Content and community name are required" });
		}

		const community = await Community.findById(id);
		if (!community) {
			return res.json({ message: "Community does not exist" });
		}

		const msg = await Message.create({
			author: user._id,
			author_name: user.firstName,
			content: content,
			community: id,
		});

		return res.status(201).json({
			message: "Message Created",
			msg,
		});
	});
};

export { createMessage };
