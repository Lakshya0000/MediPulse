import { Router } from "express";
import { doctorSignup, doctorLogin } from "../controller/auth.js";
import { getDoctorById, getAllDoctors, deleteDoctorById } from "../controller/doctor.js";
import userValidation from "../middleware/validateUser.js";

const doctorRouter = Router();

doctorRouter.post("/signup", doctorSignup);
doctorRouter.post("/login", doctorLogin);

doctorRouter.get("/:id", getDoctorById);
doctorRouter.delete("/:id", userValidation, deleteDoctorById);
doctorRouter.get("/", getAllDoctors);


export default doctorRouter;
