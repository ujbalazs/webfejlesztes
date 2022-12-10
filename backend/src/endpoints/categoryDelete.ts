import express from 'express';
import { Category } from '../models';


const router = express.Router();

router.delete('/api/category/delete/:categoryId',async (req, res) => {
		const { categoryId } = req.params;

		const response = await Category.delete(
			categoryId
		);

		return res.json(response);
	}
);

export { router as deleteCategoryRouter };