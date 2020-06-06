const express = require('express');
const dotenv = require('dotenv').config();
const sentry = require('@sentry/node');

const api = require('./api');
const config = require('./config');

sentry.init({ dsn: 'https://ed36eac55024419aa07841fd56033261@o403582.ingest.sentry.io/5266418' });

const app = express();
app.use(express.json());
app.use('/api', api);

app.get('/', (req, res) => {
    res.sendStatus(500);
});

const server = app.listen(process.env.PORT || config.port, config.host, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Servidor iniciado en host ${host} puerto ${port} ...`);
});