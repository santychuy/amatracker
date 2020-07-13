import express, { json, Application, urlencoded } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

import { config } from './config';
import IndexRoutes from './routes/index.routes';

const {
  APP: { NODE_ENV },
} = config;
const app: Application = express();

app.use(helmet());
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));
if (NODE_ENV === 'development') app.use(morgan('dev'));

app.use(IndexRoutes);

export default app;
