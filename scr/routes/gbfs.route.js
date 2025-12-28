import express from "express";
import { predictDropAttendance } from "../controllers/gbfs.controller.js";

const router = express.Router();

router.get("/predict", predictDropAttendance);

export default router;
