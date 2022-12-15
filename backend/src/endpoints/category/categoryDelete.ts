import express from 'express';
import { createQueryBuilder } from 'typeorm/globals';
import { Category, Note } from '../../models';
const jwt = require('jsonwebtoken')


const router = express.Router();

router.delete('/api/category/delete/:categoryId', async (req, res) => {
	const { categoryId } = req.params;



	var token = req.headers['x-access-token'];
	jwt.verify(token, "token", async (err, verified) => {
		if (err) {
			return res.send(err.message)
		} else {

			const notes = await createQueryBuilder(Note, "notes").
				leftJoinAndSelect("notes.categories", "categories").
				where("notes.user_id = :userid", { userid: verified.user.id }).
				andWhere("categories.id = :catid", { catid: categoryId }).
				getMany();

			if (notes.length == 0) {
				const response = await Category.delete(
					categoryId

				);

				return res.sendStatus(200);
			} else {
				res.statusMessage = "Assigned category!"
				return res.status(400).send();
			}
		}
	})
}
);

export { router as deleteCategoryRouter };