import { Express } from 'express';
import { config as configMongo } from './mongo';
import { config as configRedis } from './redis';
import { config as configRoutes } from './routes';

const MONGO_URL = process.env.MONGO_URL || 'mongodb://0.0.0.0:27017/katana';
const REDIS_URL = process.env.REDIS_URL || 'redis://0.0.0.0:6379';
const HOST = process.env.HOST || '127.0.0.1';
const PORT = Number(process.env.PORT) || 3000;

/**
 * Configure mongo, redis and express application
 * @async
 * @param {Express} app Express application to be configured
 */
const main = async (app: Express) => {
  await configMongo(MONGO_URL);
  await configRedis(REDIS_URL);
  configRoutes(app);
  await new Promise((resolve) => {
    app.listen(PORT, HOST, () => {
      process.stdout.write(`Server is up and running at http://${HOST}:${PORT}\n`);
      resolve(undefined);
    });
  });
};

export default main;
