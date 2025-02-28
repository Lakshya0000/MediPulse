import mongoose from "mongoose";

const communitySchema = new mongoose.Schema(
	{
    title: {
      type:String,
      required:true,
      unique: true,
    },
		author: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
		},
		bio: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	},
);

const Community = mongoose.model("community", communitySchema);

export default Community;
