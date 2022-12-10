import { createConnection } from 'typeorm';
import express from 'express';
import { Category, Note, Priority } from './models';
import { createCategoryRouter } from './endpoints/categorySave';
import { deleteCategoryRouter } from './endpoints/categoryDelete';
import { createPriorityRouter } from './endpoints/prioritySave';
import { deletePriorityRouter } from './endpoints/priorityDelete';
import { loadCategoryRouter } from './endpoints/categoryLoad';
import { loadPriorityRouter } from './endpoints/priorityLoad';
import { createNodeRouter } from './endpoints/noteSave';


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

		app.use(express.json());


		app.use(createCategoryRouter);
		app.use(loadCategoryRouter);
		app.use(deleteCategoryRouter);

		app.use(createPriorityRouter);
		app.use(loadPriorityRouter);
		app.use(deletePriorityRouter);
		app.use(createNodeRouter);

		app.listen(8080, () => {
			console.log('Now running on port 8080!');
		});
	} catch (error) {
		console.error(error);
		throw new Error('Unable to connect!');
	}
};

connection();