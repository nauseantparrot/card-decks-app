import { Deck as DeckModel } from '../models';
import { redisClient } from '../config';
import { Deck } from '../ts';

/**
 * Persist and caches a deck
 * @param deck Deck
 */
const create = async (deck: Deck) => {
  const newItem = await DeckModel.create(deck);
  await redisClient.set(newItem.id, JSON.stringify(newItem));
  return newItem;
};

/**
 * Fetch a deck by its id
 * @param id Deck identifier
 */
const fetchById = async (id: string) => {
  const cacheItem = await redisClient.get(id);
  if (cacheItem !== null)
    return JSON.parse(cacheItem);
  return await DeckModel.findOne({
    _id: id,
  });
};

/**
 * Update the cards of a specific deck
 * @param deck Deck
 */
const update = async (deck: Deck) => {
  await DeckModel.updateOne({
    _id: deck._id,
  }, {
    cards: deck.cards,
  });
  return redisClient.set(deck._id, JSON.stringify(deck));
};

export default {
  create,
  fetchById,
  update,
};
