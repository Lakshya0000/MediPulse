import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		bio: {
			type: String,
			required: true,
		},
		location: {
			type: String,
			// required: true,
		},
		kind: {
			type: String,
			enum: ["online", "offline"],
			required: true,
		},
		time: {
			type: String,
			required: true,
		},
		reminders: {
			type: [String],
			required: true,
		},
		community: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
		},
		author: {
			type: mongoose.Schema.ObjectId,
			required: true,
		},
		author_name: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	},
);

const Event = mongoose.model("event", eventSchema);

export default Event;
