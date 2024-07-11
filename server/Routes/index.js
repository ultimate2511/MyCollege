import express from 'express';
const router = express.Router();
import {postData} from '../Controllers/index.js';
import { signup ,signin } from '../Controllers/auth.js';
import { filterData ,predictCollege} from '../Controllers/index.js';
import { verifyToken } from '../utils/verifyUser.js';
import {
    deleteClosingRank,
    editClosingRank
} from '../controllers/index.js';
router.post('/postdata',postData);
router.post('/filterdata',filterData);
router.post('/signup', signup);
router.post('/signin', signin);
router.post('/predictColleges',predictCollege);
router.put('/editClosingRank/:closingRankId',  editClosingRank);
router.delete('/deleteClosingRank/:closingRankId',  deleteClosingRank);
export default router;