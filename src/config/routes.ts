import { Express } from 'express';
import { decksRouter } from '../routes';
import { handleError } from '../middlewares';

/**
 * Configure express application routers
 * @param app Express application
 */
const config = (app: Express) => {
  app
    .use('/decks', decksRouter)
    .use(handleError);
};

export {
  config,
};
