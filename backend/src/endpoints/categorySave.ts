import express from 'express';
import { Category } from '../models';


const router = express.Router();

router.post('/api/category/save', async (req, res) => {
	const {
		name
	} = req.body;

	const category = Category.create({
        name: name
    });

    await category.save();

    return res.json(category);

	
});

export { router as createCategoryRouter };