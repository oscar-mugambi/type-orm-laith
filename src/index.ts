import { createConnection } from 'typeorm';
import { Banker } from './entities/Banker';
import { Client } from './entities/Client';
import { Transaction } from './entities/Transaction';

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
  } catch (error) {
    console.log('unable to connect to postgres');
    throw new Error(error);
  }
};

main().catch((error) => console.log(error));
