import express from 'express';
const router = express.Router();
import {postData} from '../Controllers/index.js';
import { filterData } from '../Controllers/index.js';
import { collegelistpage } from '../Controllers/index.js';
import { signup ,signin } from '../Controllers/auth.js';

router.post('/postdata',postData);
router.post('/filterdata',filterData);
router.post('/jeemains/listpage',collegelistpage);
router.post('/signup', signup);
router.post('/signin', signin);
export default router;