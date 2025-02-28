import Ngo from "../model/ngo.js";

const getAllNgos = async (_, res) => {
	const ngos = Ngo.find({});
	return res.json(ngos);
};

export { getAllNgos };
