import express from "express";
import {Message} from '../types';
import {promises as fs} from 'fs';

const path = './messages.tsx';

const messageRouter = express.Router();

const messages: Message[] = [];
const datetime = new Date().toISOString();

messageRouter.get('/', (req, res) => {
  return res.send(messages);
});

messageRouter.post('/', (req, res) => {
  return res.send('Ты отправил post запрос');
});

messageRouter.post('/:id', (req, res) => {
  messages.push({
    message: req.body.message,
    date: datetime,
  });

  const run = async () => {
    try {
      await fs.writeFile(path, JSON.stringify(messages, null, 2))
    } catch (err) {
      console.log(err)
    }
  };

  run().catch(console.error);

  return res.send('Ты отправил POST запрос');
});

export default messageRouter;

