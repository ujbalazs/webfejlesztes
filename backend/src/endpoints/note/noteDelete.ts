import express from 'express';
import { Note } from '../../models';


const router = express.Router();

router.delete('/api/note/delete/:noteId',async (req, res) => {
		const { noteId } = req.params;

		const response = await Note.delete(
			parseInt(noteId)
		);

		return res.json(response);
	}
);

export { router as deleteNoteRouter };