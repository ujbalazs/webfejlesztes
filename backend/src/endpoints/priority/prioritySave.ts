import express from 'express';
import {  Priority } from '../../models';


const router = express.Router();

router.post('/api/priority/save', async (req, res) => {
	const {
		name
	} = req.body;

	const priority = Priority.create({
        name: name
    });

    await priority.save();

    return res.sendStatus(200);

	
});

export { router as createPriorityRouter };