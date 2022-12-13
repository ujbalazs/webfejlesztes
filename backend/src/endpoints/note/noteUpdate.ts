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
    
    if( text == null || text == "" || priority == null || categories == null){
      return res.sendStatus(400);
     }else{

	const note = Note.create({
    id: parseInt(noteId),
    text: text,
    priority: priority,
    categories:categories
});

//ManytoMany miatt a sima update nem működik, ezzel csinálja jól.
await note.save();

return res.sendStatus(200);

}
});

export { router as updateNoteRouter };