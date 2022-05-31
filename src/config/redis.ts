import { createClient, RedisClientType } from 'redis';

let client: RedisClientType;

/**
 * Create a connection with the Redis database
 * @param url Redis URL
 */
const config = (url: string) => {
  if (client !== undefined) return;
  client = createClient({
    url,
  });
  return client.connect();
};

export {
  client,
  config,
};
