import express from 'express';
import { getRoom } from '../controllers/room.js';

const router = express.Router();

/**
 * GET /
 * -------------------------
 * Meaning:
 * When user opens:
 *   GET /api/years
 * This function runs getYears()
 */
router.get('/getall', getRoom);

export default router;
