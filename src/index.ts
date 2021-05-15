import express from 'express';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ exposedHeaders: ['Content-Disposition'] }));
app.use(routes);

app.listen(process.env.APP_PORT, () => {
  console.log(`⚡️ The server is running on port: ${process.env.APP_PORT}`);
});

export default app;