import express from 'express';
const router = express.Router();
import {detailUsingId, postData} from '../controllers/index.js';
import { signup ,signin,signout } from '../controllers/auth.js';
import { filterData ,predictCollege} from '../controllers/index.js';

import {
    deleteClosingRank,
    editClosingRank
} from '../controllers/index.js';
router.post('/postdata',postData);
router.post('/filterdata',filterData);
router.post('/signup', signup);
router.post('/signin', signin);
router.post('/signout', signout);
router.post('/predictColleges',predictCollege);
router.put('/editClosingRank/:closingRankId',  editClosingRank);
router.delete('/deleteClosingRank/:closingRankId',  deleteClosingRank);
router.post('/detailUsingId/:closingRankId',detailUsingId);
export default router;