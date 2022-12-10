import express from 'express';
import {  Priority } from '../../models';


const router = express.Router();

router.delete('/api/priority/delete/:priorityId',async (req, res) => {
		const { priorityId } = req.params;

		const response = await Priority.delete(
			priorityId
		);

		return res.sendStatus(200);
	}
);

export { router as deletePriorityRouter };