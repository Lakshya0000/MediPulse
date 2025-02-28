import { Router } from "express";
import userValidation from "../middleware/validateUser.js";
import { getAllNgos } from "../controller/ngo.js";

const ngoRouter = Router();

ngoRouter.get("/",userValidation,getAllNgos);

export default ngoRouter;
