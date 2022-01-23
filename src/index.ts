import { createConnection } from 'typeorm';
import { Client } from './entities/Client';

const main = async () => {
  try {
    await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'oscar',
      password: 'password',
      database: 'oscar',
      entities: [Client],
      synchronize: true,
    });

    console.log('connected to postgres');
  } catch (error) {
    console.log('unable to connect to postgres');
    throw new Error(error);
  }
};

main();
