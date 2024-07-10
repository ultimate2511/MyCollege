import express from 'express';
const router = express.Router();
import {postData} from '../Controllers/index.js';
import { filterData ,predictCollege} from '../Controllers/index.js';

router.post('/postdata',postData);
router.post('/filterdata',filterData);
router.post('/predictColleges',predictCollege);
export default router;