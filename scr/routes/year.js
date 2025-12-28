import express from 'express';
import { getYears } from '../controllers/year.js';

const router = express.Router();

router.get('/getall', getYears);

export default router;
