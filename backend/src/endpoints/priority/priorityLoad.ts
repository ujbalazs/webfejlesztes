import express from 'express';
import {Priority } from '../../models';
import { createQueryBuilder } from 'typeorm';


const router = express.Router();
const jwt = require('jsonwebtoken')

router.get('/api/priorities', async (req, res) => {

	var token = req.headers['x-access-token'];
    jwt.verify(token, "token", async (err, verified) => {
		if(err){
		  return res.send(err.message)
		}else{

	const priorities = await createQueryBuilder(Priority, "priorities")
	.where("priorities.user_id = :userid", { userid: verified.user.id })
    .getMany();

	return res.json(priorities);
		}
	  })
});

export { router as loadPriorityRouter };