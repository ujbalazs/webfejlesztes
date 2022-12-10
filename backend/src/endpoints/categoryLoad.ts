import express from 'express';
import { Category } from '../models';
import { createQueryBuilder } from 'typeorm';


const router = express.Router();

router.get('/api/categories', async (req, res) => {


	const categories = await createQueryBuilder(Category, "categories")
	.where("categories.id IN (:...ids)", { ids: [1, 2] }).getMany();
	
	console.log(categories)

	return res.json(categories);
});

export { router as loadCategoryRouter };