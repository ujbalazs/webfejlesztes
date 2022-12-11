import { createConnection } from 'typeorm';
import express from 'express';
import { Category, Note, Priority } from './models';
import { createCategoryRouter } from './endpoints/category/categorySave';
import { deleteCategoryRouter } from './endpoints/category/categoryDelete';
import { createPriorityRouter } from './endpoints/priority/prioritySave';
import { deletePriorityRouter } from './endpoints/priority/priorityDelete';
import { loadCategoryRouter } from './endpoints/category/categoryLoad';
import { loadPriorityRouter } from './endpoints/priority/priorityLoad';
import { createNoteRouter } from './endpoints/note/noteSave';
import { updateNoteRouter } from './endpoints/note/noteUpdate';
import { loadNoteRouter } from './endpoints/note/noteLoad';
import { deleteNoteRouter } from './endpoints/note/noteDelete';


const app = express();

const connection = async () => {
	try {
		await createConnection({
			type: 'postgres',
			host: 'localhost',
			port: 5432,
			username: 'postgres',
			password: 'qwert',
			database: 'note',
			entities:[Note, Category, Priority],
			synchronize: true,
			
		});
		console.log('Connected to Database');


		app.use((req, res, next) => {	
			if(!req.get('Authorization')){
				const err = new Error('Not Authenticated!')	;
				res.status(401);
				next(err);
			}else{
				const auth = Buffer.from(req.get('Authorization')!.split(' ')[1], 'base64').toString().split(':');
				const username = auth[0]
				const password = auth[1]
				if(!(username === 'admin' && password === 'admin')){
					const err = new Error('Not Authenticated!')
					res.status(401);
					next(err)
				} 
				res.status(200)	
				next()
			}
		});
		
		app.use(express.json());
		
		app.use(createCategoryRouter);
		app.use(loadCategoryRouter);
		app.use(deleteCategoryRouter);

		app.use(createPriorityRouter);
		app.use(loadPriorityRouter);
		app.use(deletePriorityRouter);

		app.use(createNoteRouter);
		app.use(updateNoteRouter);
		app.use(loadNoteRouter);
		app.use(deleteNoteRouter);

		app.listen(8080, () => {
			console.log('Now running on port 8080!');
		});
	} catch (error) {
		console.error(error);
		throw new Error('Unable to connect!');
	}
};

connection();