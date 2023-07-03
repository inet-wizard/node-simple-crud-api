import DB from './libs/db';
import http from 'http';
import sendResponse from './utils/sendResponse';
import { BASE_URL, ErrorMessages, HttpStatusCodes } from './utils/constants';
import parseRequest from './utils/parseRequest';
import { validateUserData, validateUuid } from './utils/validation';
import { configDB } from './libs/dbHelpers';

class App {
  constructor() {}

  async getUsers(res: http.ServerResponse) {}

  async getUser(id: string, res: http.ServerResponse) {}

  async updateUser(req: http.IncomingMessage, res: http.ServerResponse, id: string) {}

  async getReqHandler(req: http.IncomingMessage, res: http.ServerResponse) {}

  async postReqHandler(req: http.IncomingMessage, res: http.ServerResponse) {}

  async putReqHandler(req: http.IncomingMessage, res: http.ServerResponse) {}

  async deleteReqHandler(req: http.IncomingMessage, res: http.ServerResponse) {}

  async requestHandler(req: http.IncomingMessage, res: http.ServerResponse) {
    try {
      res.setHeader('Content-Type', 'application/json');

      const url = req.url;

      if (url && !url.startsWith(BASE_URL) && !/\/api\/users/.test(url)) {
        sendResponse(res, HttpStatusCodes.NOT_FOUND, { error: `${url} path does not exist` });
        return;
      }

      switch (req.method) {
        case 'GET':
          await this.getReqHandler(req, res);
          break;
        case 'POST':
          await this.postReqHandler(req, res);
          break;
        case 'PUT':
          await this.putReqHandler(req, res);
          break;
        case 'DELETE':
          await this.deleteReqHandler(req, res);
          break;
        default:
          sendResponse(res, HttpStatusCodes.NOT_SUPPORTED, {
            error: ErrorMessages.UNSUPPORTED_METHOD,
          });
      }
    } catch (error) {
      sendResponse(res, HttpStatusCodes.INTERNAL_SERVER_ERROR, {
        error: ErrorMessages.SERVER_ERROR,
      });
    }
  }
}

export default App;
