import express from 'express';
import { Note } from '../../models';


const router = express.Router();

router.delete('/api/note/delete/:noteId',async (req, res) => {
		const { noteId } = req.params;

		const response = await Note.delete(
			noteId
		);

		return res.sendStatus(200);
	}
);

export { router as deleteNoteRouter };