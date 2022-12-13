import express from 'express';
import { createQueryBuilder } from 'typeorm';
import { Category, Note, Priority } from '../../models';


const router = express.Router();



router.post('/api/note/save', async (req, res) => {
	const {
		    text,
        priority,
        categories
	} = req.body;
    
   if( text == null || text == "" || priority == null || categories == null || categories.length == 0){
    return res.sendStatus(400);
   }else{

	const note = Note.create({
        text: text,
        priority: priority,
        categories:categories
    });

    await note.save()

    return res.sendStatus(200);

   }
});

export { router as createNoteRouter };