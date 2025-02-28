import Community from "../model/community.js";
import Event from "../model/event.js";

const createEvent = async (req, res, next) => {
	const { title, bio, location, community_name, kind, time, reminders } =
		req.body;
	if (!title || !bio || !kind || !time || !reminders || !community_name) {
		return res.json({
			message: "Title, Bio, Location, Kind, Time and Reminders are required",
		});
	}

	const community = await Community.findOne({ title: community_name });

	const result = await Event.create({
		title: title,
		bio: bio,
		location: location,
		community: community._id,
		kind: kind,
		time: time,
		reminders: reminders,
	});

	res
		.status(201)
		.json({ message: "Event created successfully", success: true, result });
	next();
};

export { createEvent };
