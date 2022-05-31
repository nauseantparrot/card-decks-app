import bodyParser from 'body-parser';
import compression from 'compression';
import connectTimeout from 'connect-timeout';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';;
import main from './config/main';

dotenv.config();

const app = express();

app
  .use(bodyParser.json())
  .use(compression())
  .use(connectTimeout('4s'))
  .use(cors())
  .use(helmet())
  .use(morgan('combined'));

main(app);
