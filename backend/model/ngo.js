import mongoose from "mongoose";

const ngoSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		bio: {
			type: String,
			required: true,
		},
		events: {
			type: [mongoose.Schema.Types.ObjectId],
		},
		location: {
			type: String,
		},
		contact: {
			type: Number,
			min: 1000000000,
			max: 9999999999,
		},
	},
	{
    timestamps: true,
  },
);

const Ngo = mongoose.model("ngo",ngoSchema);

export default Ngo;
