import express from 'express';
import {moveStudents,getAddClasss,getallAddClass} from '../controllers/classController.js';

const router = express.Router();

router.post('/storeData', moveStudents);
router.get('/searchData', getAddClasss);
router.get('/getall', getallAddClass);
export default router;