import express from 'express';
import {  Priority } from '../../models';


const router = express.Router();

router.post('/api/priority/save', async (req, res) => {
	const {
		name
	} = req.body;

    if(name == null || name == ""){
        return res.sendStatus(400);
    }
    else{
	const priority = Priority.create({
        name: name
    });

    await priority.save();

    return res.sendStatus(200);
}
});

export { router as createPriorityRouter };