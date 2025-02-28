import Doctor from "../model/doctor.js";

const getDoctorById = async (req, res) => {
	const user = await Doctor.findById(req.params.id);
	if (!user) {
		return res.json({ message: "Doctor does not exist" });
	}

	return res.json(user);
};

const getAllDoctors = async (_, res) => {
	const users = await Doctor.find({});
	return res.json(users);
};

const deleteDoctorById = async (req, res) => {
	const result = await Doctor.findByIdAndDelete(req.params.id);
	return res.json(result);
};

export { getDoctorById, getAllDoctors, deleteDoctorById };
