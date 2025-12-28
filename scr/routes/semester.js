import express from 'express';
import { getSemester } from '../controllers/semester.js';

const router = express.Router();

/**
 * GET /
 * -------------------------
 * Meaning:
 * When user opens:
 *   GET /api/years
 * This function runs getYears()
 */
router.get('/getall', getSemester);

export default router;
