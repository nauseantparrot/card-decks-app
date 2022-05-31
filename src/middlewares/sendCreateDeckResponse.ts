import { NextFunction, Request, Response } from 'express';
import { Deck } from '../ts';

/**
 * Send the response related to the creation of a new deck
 * @param req Request
 * @param res Response
 * @param next Next middleware
 */
const sendCreateDeckResponse = (req: Request, res: Response, next: NextFunction) => {
  const deck: Deck = res.locals.deck;

  const formattedDeck = {
    deckId: deck._id,
    type: deck.type,
    shuffled: deck.shuffled,
    remaining: deck.cards.length,
  };

  res
    .status(201)
    .json(formattedDeck);
};

export default sendCreateDeckResponse;

