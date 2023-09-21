import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import getSettings from './controllers/getSettings.js';
import getSettingsSta from './controllers/getSettingsSta.js';
import getStatus from './controllers/getStatus.js';
import getSTA from './controllers/getSTA.js';

const PORT = 3000;

const app = express();

app.use(cors());

app.get('/', getStatus);

app.get('/settings', getSettings);

app.get('/settings/sta', getSettingsSta);

app.get('/shelly/connect', getSTA);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
    }
);

