import { createConnection } from 'typeorm';
import express from 'express';


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
			synchronize: true,
		});
		console.log('Connected to Database');

		app.use(express.json());
		app.listen(8080, () => {
			console.log('Now running on port 8080!');
		});
	} catch (error) {
		console.error(error);
		throw new Error('Unable to connect!');
	}
};

connection();