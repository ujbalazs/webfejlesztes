import express from 'express';
import { Note } from '../../models';
const jwt = require('jsonwebtoken')


const router = express.Router();

router.delete('/api/note/delete/:noteId', async (req, res) => {
	const { noteId } = req.params;


	var token = req.headers['x-access-token'];
	jwt.verify(token, "token", async (err, verified) => {
		if (err) {
			return res.send(err.message)
		} else {

			const response = await Note.delete(
				noteId
			);

			return res.sendStatus(200);
		}
	})
}
);

export { router as deleteNoteRouter };