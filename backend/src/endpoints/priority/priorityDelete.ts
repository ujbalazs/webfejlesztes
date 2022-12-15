import express from 'express';
import { createQueryBuilder } from 'typeorm/globals';
import { Note, Priority } from '../../models';


const router = express.Router();
const jwt = require('jsonwebtoken')

router.delete('/api/priority/delete/:priorityId', async (req, res) => {
	const { priorityId } = req.params;

	var token = req.headers['x-access-token'];
	jwt.verify(token, "token", async (err, verified) => {
		if (err) {
			return res.send(err.message)
		} else {

			const notes = await createQueryBuilder(Note, "notes").
				leftJoinAndSelect("notes.priority", "priority").
				where("notes.user_id = :userid", { userid: verified.user.id }).
				andWhere("priority.id = :prioid", { prioid: priorityId }).
				getMany();

			if (notes.length == 0) {
				const response = await Priority.delete(
					priorityId
				);

				return res.sendStatus(200);
			} else {
				res.statusMessage = "Assigned priority!"
				return res.status(400).send();
			}
		}
	})
}
);

export { router as deletePriorityRouter };