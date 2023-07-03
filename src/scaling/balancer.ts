import http, { IncomingMessage, ServerResponse } from 'http';

import dotenv from 'dotenv';

import DB from '../libs/db';
import App from '../app';
dotenv.config();

const server = http.createServer();
const requestHandler = async (req: IncomingMessage, res: ServerResponse) => {
  const db = new DB();
  const app = new App(db);
  await app.requestHandler(req, res);
};
