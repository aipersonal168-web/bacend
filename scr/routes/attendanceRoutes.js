import express from 'express';
import { getAllAttendance,storeAttendance } from '../controllers/attendance.js';

const router = express.Router();

// Get all attendance
router.get('/getall', getAllAttendance);

// Get weekly summary (for Chart.js)
// router.get('/weekly', getWeeklyAttendance);

// Create attendance record (teacher marks attendance)
router.post('/store', storeAttendance);

export default router;
