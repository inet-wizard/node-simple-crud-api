import request from 'supertest';
import { createServer } from 'http';
import { IUser } from '../src/types/types';
import App from '../src/app';
import DB from '../src/libs/db';
import { configDB } from '../src/libs/dbHelpers';

const db = new DB();
const app = new App(db);
const mockServer = createServer(async (req, res) => await app.requestHandler(req, res));
const mockApp = request(mockServer);

const testUser: Omit<IUser, 'id'> = {
  username: 'John',
  age: 32,
  hobbies: ['sports', 'music'],
};

const testUser2: Omit<IUser, 'id'> = {
  username: '',
  age: 32,
  hobbies: ['sports', 'music'],
};

const testUser3: Omit<IUser, 'id'> = {
  username: 'John',
  age: 0,
  hobbies: ['sports', 'music'],
};

let newUser: IUser;

beforeAll(() => {
  configDB.start();
});

afterAll(() => {
  mockServer.close();
  configDB.end();
});
