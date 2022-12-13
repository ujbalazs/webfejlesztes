import express from 'express';
import { createQueryBuilder } from 'typeorm';
import {  User } from '../../models';


const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


router.post('/api/user/login', async (req, res) => {
	const {
		name,
        password
	} = req.body;

    const user = await createQueryBuilder(User, "user")
    .where("user.name = :name", { name: name })
    .getOne();

    if(user == null){
        return res.status(400).send('Login failed')
    }

    if(await bcrypt.compare(password, user!.password)) {
        
        const token = jwt.sign({user}, 'token');

        return res.json({token: token});

      } else {
        return res.status(400).send('Login failed')
      }

    

   
});

export { router as loginUserRouter };