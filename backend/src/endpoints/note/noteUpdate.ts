import express from 'express';
import { Note } from '../../models';


const router = express.Router();
const jwt = require('jsonwebtoken')



router.post('/api/note/update/:noteId', async (req, res) => {
  const {
    text,
    priority,
    categories
  } = req.body;
  const { noteId } = req.params;

  var token = req.headers['x-access-token'];
  jwt.verify(token, "token", async (err, verified) => {
    if (err) {
      return res.send(err.message)
    } else {

      if (text == null || text == "" || priority == null || categories == null) {
        return res.sendStatus(400);
      } else {

        const note = Note.create({
          id: parseInt(noteId),
          text: text,
          priority: priority,
          categories: categories
        });

        //ManytoMany miatt a sima update nem működik, ezzel csinálja jól.
        await note.save();

        return res.sendStatus(200);

      }
    }
  })
});

export { router as updateNoteRouter };