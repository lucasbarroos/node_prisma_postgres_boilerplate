import express from 'express';
import './database.ts';

import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`The server is running on port: ${process.env.APP_PORT}`);
});
