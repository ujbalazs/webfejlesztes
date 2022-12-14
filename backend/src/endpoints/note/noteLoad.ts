import express from 'express';
import { Note } from '../../models';
import { createQueryBuilder } from 'typeorm';
const jwt = require('jsonwebtoken')


const router = express.Router();

router.get('/api/notes', async (req, res) => {


	var token = req.headers['x-access-token'];
    jwt.verify(token, "token", async (err, verified) => {
		if(err){
		  return res.send(err.message)
		}else{

	const notes = await createQueryBuilder(Note, "notes").
	where("notes.user_id = :userid", { userid: verified.user.id }).
	leftJoinAndSelect("notes.categories", "categories").
	leftJoinAndSelect("notes.priority", "priority").
	getMany();
	
	return res.json(notes);
}
})
});

export { router as loadNoteRouter };