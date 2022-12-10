import express from 'express';
import {Note} from '../../models';


const router = express.Router();



router.post('/api/note/update/:noteId', async (req, res) => {
	const {
		    text,
        priority,
        categories
	} = req.body;
    const { noteId } = req.params;
    
   
  console.log(req.body)

	const note = Note.create({
    id: parseInt(noteId),
    text: text,
    priority: priority,
    categories:categories
});

//ManytoMany miatt a sima update nem működik, ezzel csinálja jól.
await note.save();

return res.json(note);

	
});

export { router as updateNoteRouter };