import express from 'express';
import { Category } from '../models';
import { createQueryBuilder } from 'typeorm';


const router = express.Router();

router.get('/api/categories', async (req, res) => {


	const categories = await createQueryBuilder(Category, "categories").getMany();
	console.log(categories)

	return res.json(categories);
});

export { router as loadCategoryRouter };