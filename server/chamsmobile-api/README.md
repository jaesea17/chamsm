## Description
Facilitats CRUD operations from the client to a mysql database

## Installation

```bash
$ npm install
```

## Running the app
Make sure you have docker installed and running.

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# start docker image of mysql database
$ docker-compose up
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

### NAMING CONVENTION

- All succesful operation should return the `status code` with `message: "Success`

### API ENDPOINTS ROUTE

- *book* **POST** `http://localhost:3000/book/`
- *book* **GET** `http://localhost:3000/book/`
- *book* **GET** `http://localhost:3000/book/:id`
- *book* **PATCH** `http://localhost:3000/book/:id`
- *book* **DELETE** `http://localhost:3000/book/:id`


