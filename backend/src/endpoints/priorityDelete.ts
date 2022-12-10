import express from 'express';
import {  Priority } from '../models';


const router = express.Router();

router.delete('/api/priority/delete/:priorityId',async (req, res) => {
		const { priorityId } = req.params;

		const response = await Priority.delete(
			priorityId
		);

		return res.json(response);
	}
);

export { router as deletePriorityRouter };