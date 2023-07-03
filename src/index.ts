import http, { IncomingMessage, ServerResponse } from 'http';
import dotenv from 'dotenv';
import App from './app';
import { PORT } from './utils/constants';

dotenv.config();

const server = http.createServer();

const requestHandler = async (req: IncomingMessage, res: ServerResponse) => {
  const app = new App();
  await app.requestHandler(req, res);
};

const startServer = () => {
  server.listen(PORT, () => {
    console.log(`Server is listening on the port ${PORT}`);
  });
  server.on('request', requestHandler);
};

try {
  startServer();
  process.on('SIGINT', async () => {
    process.exit();
  });
} catch (error: unknown) {
  const err = error as Error;
  process.stderr.write(`App error - ${err.message}`);
  process.exit(1);
}
