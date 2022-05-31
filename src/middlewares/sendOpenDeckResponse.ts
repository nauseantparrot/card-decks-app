import { NextFunction, Request, Response } from 'express';
import { Card, Deck } from '../ts';

/**
 * Send the response related to opening a deck
 * @param req Request
 * @param res Response
 * @param next Next middleware
 */
const sendOpenDeckResponse = (req: Request, res: Response, next: NextFunction) => {
  const deck: Deck = res.locals.deck;

  const formattedDeck = {
    deckId: deck._id,
    type: deck.type,
    shuffled: deck.shuffled,
    remaining: deck.cards.length,
    cards: deck.cards.map(({ value, suit, code }: Card) => ({
      value,
      suit,
      code,
    })),
  };

  res.json(formattedDeck);
};

export default sendOpenDeckResponse;
