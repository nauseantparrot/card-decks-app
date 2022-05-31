# CARD DECKS APP

|Method|Path|Description|Query params|
|---|---|---|---|
|POST|/decks|Create a new deck|None|
|GET|/decks/:id|Open a deck|None|
|GET|/decks/:id/cards|Draw cards from deck|?amount=[1]|

## Development

### Pre-conditions

Make sure you have installed all of the next software items in your computer in the indicated version or in a version that may be compatible:

- **nodejs** version `v14.17.4`.
- **npm** version `6.14.14`.
- **yarn** version `1.22.15`.
- **docker** or **podman** in the latest version available.
- **docker-compose** or **podman-compose** in the latest version available.

### Step by step

Follow the next steps to run the project locally:

1. Run `yarn install` in the root of the project.
2. Run a **mongo** container using one of the following commands:
        - `docker run -d -p 27017:27017 --name katana-mongo mongo`
        - `podman run -d -p 27017:27017 --name katana-mongo docker.io/library/mongo`
3. Run a **redis** container using oe of the following commands:
        - `docker run -d -p 6379:6379 --name katana-redis redis`
        - `podman run -d -p 6379:6379 --name katana-redis docker.io/library/redis`
4. Create a `.env` file in the root of the project with the next environment variables, and change the values accordingly:
        - `HOST=127.0.0.1`
        - `PORT=3000`
        - `MONGO_URL=mongodb://0.0.0.0:27017/katana`
        - `REDIS_URL=redis://0.0.0.0:6379`
5. Run `yarn start` in the root of the project.

## Build (containerized)

Follow the next steps:

1. Run one of the following commands in the root of the project to create the build the image:
        - `docker build -t card-decks-app .`
        - `podman build -t card-decks-app .`
2. Run one of the following commands in the root of the project to start the needed containers (**mongo**, **redis**, **app**):
        - `docker-compose up`
        - `podman-compose up`

## Test

Make sure the application is up locally or in a containerized way and run the `yarn test` command.
