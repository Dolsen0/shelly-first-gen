import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import getSettings from './controllers/getSettings.js';
import getSettingsSta from './controllers/getSettingsSta.js';
import getStatus from './controllers/getStatus.js';
import getSTA from './controllers/getSTA.js';
import getMotionDark from './controllers/getMotionDark.js';

const PORT = 3000;

const app = express();

app.use(cors());

app.get('/', getStatus);

app.get('/settings', getSettings);

app.get('/settings/sta', getSettingsSta);

app.get('/shelly/connect', getSTA);

app.get('/action/motiondark', getMotionDark);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
    }
);

// /settings/actions?motion_dark=http://shellyplugus-c049ef88a8ac/rpc/Switch.Set?id=0&on=true

// http://shellyplugus-c049ef88a8ac/rpc/Switch.Set?id=0&on=true


// /settings/actions?index=0&name=motion_on&enabled=true&urls[]=http://shellyplugus-c049ef88a8ac/rpc/Switch.Set?id=0&on=true