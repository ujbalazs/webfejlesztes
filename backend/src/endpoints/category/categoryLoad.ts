import express from 'express';
import { Category } from '../../models';
import { createQueryBuilder } from 'typeorm';

const jwt = require('jsonwebtoken')
const router = express.Router();

router.get('/api/categories',  (req, res) => {

	var token = req.headers['x-access-token'];
   jwt.verify(token, "token", async (err, verified) => {
		if(err){
		  return res.send(err.message)
		}else{

			
			console.log(verified)
            
			const categories = await createQueryBuilder(Category, "categories")
			.getMany();
			

			return res.json(categories);
		}
	  })
	  
	
});

export { router as loadCategoryRouter };