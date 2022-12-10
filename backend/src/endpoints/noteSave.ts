import express from 'express';
import { createQueryBuilder } from 'typeorm';
import { Category, Note, Priority } from '../models';


const router = express.Router();



router.post('/api/note/save', async (req, res) => {
	const {
		text,
        priority,
        categories
	} = req.body;
    
   
  console.log(req.body)

	const note = Note.create({
        text: text,
        priority: priority,
        categories:categories
    });

    await note.save();

    return res.json(note);

	
});

export { router as createNodeRouter };