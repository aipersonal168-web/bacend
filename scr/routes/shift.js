import express from 'express';
import { getShift } from '../controllers/shift.js';

const router = express.Router();

/**
 * GET /
 * -------------------------
 * Meaning:
 * When user opens:
 *   GET /api/years
 * This function runs getYears()
 */
router.get('/getall', getShift);

export default router;
