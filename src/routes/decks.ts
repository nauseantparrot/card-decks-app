import { Router } from 'express';
import cardsRouter from './cards';
import {
  assignCards,
  createDeck,
  fetchDeck,
  sendCreateDeckResponse,
  sendOpenDeckResponse,
  shuffleCards,
  validateCreationSchema,
} from '../middlewares';

const decksRouter = Router();

decksRouter
  .param('deckId', fetchDeck)
  .use('/:deckId/cards', cardsRouter)
  .get('/:deckId', sendOpenDeckResponse)
  .post('/', validateCreationSchema, assignCards, shuffleCards, createDeck, sendCreateDeckResponse);

export default decksRouter;
