import express from 'express';
import { createQueryBuilder } from 'typeorm';
import {  User } from '../../models';


const router = express.Router();
const bcrypt = require('bcrypt');

router.post('/api/user/register', async (req, res) => {
	const {
		name,
        password
	} = req.body;

    if(name == "" || name == null || password == "" || password== null){
        return res.sendStatus(400)
      }else{
    const users = await createQueryBuilder(User, "users")
    .getMany();

    for(let i =0; i< users.length; i++){
        if(users[i].name == name){
           return res.status(400).send('This name is already taken')
        }
     }
    const hashPassword = await bcrypt.hash(password, 10)
	const priority = User.create({
        name: name,
        password: hashPassword
    });

    await priority.save();

    return res.sendStatus(200);    
}  
});

export { router as createUserRouter };