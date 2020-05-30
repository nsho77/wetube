import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { localMiddleware } from './middleWares';
import userRouter from './Routers/userRouter';
import videoRouter from './Routers/videoRouter';
import globalRouter from './Routers/globalRouter';
import routes from './routes';

const app = express();

app.use(helmet());
app.set(`view engine`, `pug`);
app.use("/uploads", express.static("uploads"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use(localMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;