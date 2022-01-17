import 'dotenv/config.js';
import './db/mongoose.js';
import express from 'express';
import { createServer } from 'http';
import cors from 'cors';
import errorHandler from './middlewares/errorHandler.js';
import verifyToken from './middlewares/verifyToken.js';
import usersRouter from './routes/usersRouter.js';
import roomsRouter from './routes/roomsRouter.js';
import messageRouter from './routes/messageRouter.js';

const app = express();
const server = createServer(app);
const port = process.env.PORT || 5000;

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use('/auth', usersRouter);
app.use('/room', roomsRouter);
app.use('/message', verifyToken, messageRouter);
app.use('*', (req, res) => res.send('Chok API'));
app.use(errorHandler);

server.listen(port, () => console.log(`Server is running at http://localhost:${port}`));
