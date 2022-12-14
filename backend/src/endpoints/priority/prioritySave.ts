import express from 'express';
import {  Priority } from '../../models';


const router = express.Router();
const jwt = require('jsonwebtoken')

router.post('/api/priority/save', async (req, res) => {
	const {
		name
	} = req.body;

    var token = req.headers['x-access-token'];
		jwt.verify(token, "token", async (err, verified) => {
			if(err){
			  return res.send(err.message)
			}else{

    if(name == null || name == ""){
        return res.sendStatus(400);
    }
    else{
	const priority = Priority.create({
        name: name,
        user_id: verified.user.id
    });

    await priority.save();

    return res.sendStatus(200);
}}
})
}
);

export { router as createPriorityRouter };