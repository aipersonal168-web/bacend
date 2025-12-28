import express from "express";
import {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
  getTotalStudents,
} from "../controllers/studentController.js";

// Initialize Router
const router = express.Router();

router.post("/create", createStudent);
router.get("/getAll", getAllStudents);
router.get("/getby/:id", getStudentById);
router.put("/update/:id", updateStudent);
router.delete("/distroy/:id", deleteStudent);

router.get('/count',getTotalStudents);
// Search Students
// router.get("/search", getStudents);
export default router;