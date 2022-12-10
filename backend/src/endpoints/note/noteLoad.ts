import express from 'express';
import { Note } from '../../models';
import { createQueryBuilder } from 'typeorm';


const router = express.Router();

router.get('/api/notes', async (req, res) => {


	const notes = await createQueryBuilder(Note, "notes").
	getMany();
	
	console.log(notes)

	return res.json(notes);
});

export { router as loadNoteRouter };