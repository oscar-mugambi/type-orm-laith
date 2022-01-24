import express from 'express';
import { Client } from '../entities/Client';
import { createQueryBuilder } from 'typeorm';

const router = express.Router();

router.get('/api/clients', async (req, res) => {
  const clients = await createQueryBuilder('client')
    .select('client')
    .from(Client, 'client')
    .where('client.id = :clientId', { clientId: 2 })
    .getOne();
  res.json(clients);
});

export { router as fetchClientRouter };
