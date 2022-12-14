import express from 'express';
import { Category } from '../../models';
const jwt = require('jsonwebtoken')


const router = express.Router();

router.post('/api/category/save', async (req, res) => {
	const {
		name
	} = req.body;



	var token = req.headers['x-access-token'];
		jwt.verify(token, "token", async (err, verified) => {
			if(err){
			  return res.send(err.message)
			}else{

                if(name == null || name == ""){
                    return res.sendStatus(400);
                }else{
                const category = Category.create({
                    name: name,
					user_id: verified.user.id
                });
            
                await category.save();
            
                return res.sendStatus(200);
	}}
})
}
);
export { router as createCategoryRouter };