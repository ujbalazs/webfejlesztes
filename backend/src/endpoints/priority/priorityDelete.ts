import express from 'express';
import {  Priority } from '../../models';


const router = express.Router();
const jwt = require('jsonwebtoken')

router.delete('/api/priority/delete/:priorityId',async (req, res) => {
		const { priorityId } = req.params;


		var token = req.headers['x-access-token'];
		jwt.verify(token, "token", async (err, verified) => {
			if(err){
			  return res.send(err.message)
			}else{
		const response = await Priority.delete(
			priorityId
		);

		return res.sendStatus(200);
	}
})
}
);

export { router as deletePriorityRouter };