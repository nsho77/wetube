import express from 'express';
import routes from '../routes';
import { home, search, videos } from '../controller/videoController';
import { join, login, logout, users } from '../controller/userController';

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.users, users);
globalRouter.get(routes.videos, videos);

export default globalRouter;