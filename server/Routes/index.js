import express from 'express';
const router = express.Router();
import {postData} from '../Controllers/index.js';
import { filterData } from '../Controllers/index.js';

router.post('/postdata',postData);
router.post('/filterdata',filterData);
export default router;