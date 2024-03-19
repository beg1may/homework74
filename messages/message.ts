import express from "express";
import {Message} from '../types';

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
  return res.send('Ты отправил POST запрос');
});

export default messageRouter;