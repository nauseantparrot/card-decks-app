import { Router } from 'express';
import {
  drawCards,
  sendDrawCardsResponse,
} from '../middlewares';

const cardsRouter = Router({mergeParams: true});

cardsRouter.get('/', drawCards, sendDrawCardsResponse);

export default cardsRouter;
