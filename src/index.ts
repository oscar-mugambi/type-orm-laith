import { createConnection } from 'typeorm';

const main = async () => {
  try {
    await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'oscar',
      password: 'password',
      database: 'oscar',
    });

    console.log('connected to postgres');
  } catch (error) {
    console.log('unable to connect to postgres');
  }
};

main();
