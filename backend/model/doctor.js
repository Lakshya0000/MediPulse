import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
		},
		email: {
			type: String,
			required: true,
			match: /.+\@.+\..+/,
			unique: true,
		},
		gender: {
			type: String,
			enum: ["male", "female", "other"],
			required: true,
		},
		events: {
			type: [mongoose.Schema.Types.ObjectId],
		},
		bio: {
			type: String,
		},
		phone: {
			type: Number,
			min: 1000000000,
			max: 9999999999,
		},
    rating: {
      type:Number,
    },
		communities: {
			type: [mongoose.Schema.Types.ObjectId],
		},
		experience: {
			years: {
				type: Number,
				required: true,
			},
			expertise: {
				type: String,
				required: true,
			},
      qualification: {
        type:String,
      },
		},
		clinic: {
			name: {
				type: String,
			},
			location: {
				type: String,
			},
      pin:{
        type:Number,
      },
			phoneNumber: {
				type: Number,
				min: 1000000000,
				max: 9999999999,
			},
		},
	},
	{
		timestamps: true,
	},
);

const Doctor = mongoose.model("doctor", doctorSchema);

export default Doctor;
