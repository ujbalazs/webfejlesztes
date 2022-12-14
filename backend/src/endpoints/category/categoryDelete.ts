import express from 'express';
import { Category } from '../../models';
const jwt = require('jsonwebtoken')


const router = express.Router();

router.delete('/api/category/delete/:categoryId',async (req, res) => {
		const { categoryId } = req.params;

		var token = req.headers['x-access-token'];
		jwt.verify(token, "token", async (err, verified) => {
			if(err){
			  return res.send(err.message)
			}else{

		const response = await Category.delete(
			categoryId
			
		);

		return res.sendStatus(200);
	}
})
}
);

export { router as deleteCategoryRouter };