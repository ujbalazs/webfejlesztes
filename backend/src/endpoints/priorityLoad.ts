import express from 'express';
import {Priority } from '../models';
import { createQueryBuilder } from 'typeorm';


const router = express.Router();

router.get('/api/priorities', async (req, res) => {


	const priorities = await createQueryBuilder(Priority, "priorities")
    .getMany();

	return res.json(priorities);
});

export { router as loadPriorityRouter };