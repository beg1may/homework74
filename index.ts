import express from 'express';
import messageRouter from './messages/message';

const app = express();
const port = 8000;

app.use(express.json());
app.use('/create', messageRouter);


app.listen(port, () => {
  console.log(`Server started on ${port} port!`);
});