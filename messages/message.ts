import express from "express";
import {Message} from '../types';
const messageRouter = express.Router();

const message: Message[] = [];

messageRouter.get('/', (req, res) => {
  return res.send(message);
});

messageRouter.get('/:id', (req, res) => {
  return res.send('Ты отправил GET запрос с ID');
});

messageRouter.post('/:id', (req, res) => {
  message.push({
    message: req.body.message,
  });
  return res.send('Ты отправил POST запрос');
});

export default messageRouter;