import express from 'express';
import { createConnection } from 'typeorm';
import { Banker } from './entities/Banker';
import { Client } from './entities/Client';
import { Transaction } from './entities/Transaction';

const app = express();

const main = async () => {
  try {
    await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'oscar',
      password: 'password',
      database: 'oscar',
      entities: [Client, Banker, Transaction],
      synchronize: true,
    });

    console.log('connected to postgres');
    app.use(express.json());

    app.listen(5000, () => {
      console.log('connected on port 5000');
    });
  } catch (error) {
    console.log('unable to connect to postgres');
    throw new Error(error);
  }
};

main().catch((error) => console.log(error));
