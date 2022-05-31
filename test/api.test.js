const axios = require('axios').default;
const dotenv = require('dotenv');

dotenv.config();

const HOST = process.env.HOST || '127.0.0.1';
const PORT = Number(process.env.PORT) || 3000;

const url = `http://${HOST}:${PORT}`;

const client = axios.create({
  baseURL: url,
});

let deckId;

test('Create a new deck', async () => {
  const fullDeck = {
    type: 'FULL',
    shuffled: false,
  };

  const res = await client.post('/decks', fullDeck);

  expect(res.status).toBe(201);

  const item = res.data;
  deckId = item.deckId;

  expect(item.type).toBe('FULL');
  expect(item.shuffled).toBe(false);
  expect(item.remaining).toBe(52);
});

test('Open a deck', async () => {
  const res = await client.get(`/decks/${deckId}`);

  expect(res.status).toBe(200);

  const item = res.data;

  expect(item.deckId).toBe(deckId);
  expect(item.type).toBe('FULL');
  expect(item.shuffled).toBe(false);
  expect(item.remaining).toBe(52);
});

test('Draw cards from deck', async () => {
  const res = await client.get(`/decks/${deckId}/cards?amount=4`);

  expect(res.status).toBe(200);

  const cards = res.data?.cards ?? [];

  expect(cards.length).toBe(4);
});
