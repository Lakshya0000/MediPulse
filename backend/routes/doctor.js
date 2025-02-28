import { Router } from "express";
import { doctorSignup, doctorLogin } from "../controller/auth.js";
import { getDoctorById, getAllDoctors, deleteDoctorById } from "../controller/doctor.js";
import userValidation from "../middleware/validateUser.js";

const doctorRouter = Router();

doctorRouter.post("/signup", doctorSignup);
doctorRouter.post("/login", doctorLogin);

doctorRouter.get("/:id", userValidation, getDoctorById);
doctorRouter.delete("/:id", userValidation, deleteDoctorById);
doctorRouter.get("/", userValidation, getAllDoctors);

export default doctorRouter;
