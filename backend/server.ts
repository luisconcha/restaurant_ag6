import * as jsonServer from 'json-server';
import {Express} from 'express';
import * as fs from 'fs';
import * as https from 'https';
import {handleAuthentication} from './security/auth';
import {handleAuthorization} from './security/authz';

const colors = require('colors');
const port = 3001;
const server: Express = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);

server.post('/login', handleAuthentication);

server.use('/orders', handleAuthorization);

server.use(router);

const options = {
    cert: fs.readFileSync('./backend/keys/cert.pem'),
    key: fs.readFileSync('./backend/keys/key.pem'),
};

https.createServer(options, server).listen(3001, () => {
    console.log(`The api server running on the port: ${colors.red(port)}  - Server status: ${colors.yellow('OnLine')} `);
});
