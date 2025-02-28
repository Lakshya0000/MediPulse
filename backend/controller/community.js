import Community from "../model/community.js";
import Message from "../model/message.js";
import User from "../model/user.js";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";

configDotenv();

const getAllMessages = async (req, res) => {
	const community = await Community.findById(req.params.id);
	if (!community) {
		return res.json({ message: "Community does not exist" });
	}
	const messages = await Message.find({ community: community._id });
	return res.json(messages);
};

const getAllCommunities = async (_, res) => {
	const communities = await Community.find({});
	return res.json(communities);
};

const getAllUserCommunities = async (req, res) => {
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

		const communities = await Community.find({
			_id: { $in: user.communities },
		});
		return res.json(communities);
	});
};

const joinCommunity = async (req, res) => {
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

		const { community_name } = req.body;
		if (!community_name) {
			return res.json({ message: "Community Name is required" });
		}

		const community = await Community.findOne({ title: community_name });
		if (!community) {
			return res.json({ message: "Community does not exist" });
		}

		const result = await user.updateOne({
			$push: { communities: community._id },
		});

		return res.json(result);
	});
};

const createCommunity = async (req, res) => {
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

		const { bio, title } = req.body;
		if (!bio || !title) {
			return res.json({ message: "Bio and title are required" });
		}

		const community = await Community.create({
			title: title,
			author: user._id,
			bio: bio,
		});
		return res.status(201).json({
			message: "Community Created",
			community,
		});
	});
};

export {
	getAllMessages,
	getAllCommunities,
	createCommunity,
	getAllUserCommunities,
	joinCommunity,
};
