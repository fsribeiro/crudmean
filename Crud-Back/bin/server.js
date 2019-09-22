'use strict'

const app = require('../src/app');
const debug = require('debug')('crudnode:server');
const http = require('http');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

//Servidor escutando
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log('Karalho rodando na porta' +port);

//Normalizando a porta, se a porta 3000 estiver em uso. Funçao do express
function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    
    if (port >= 0){
        return port;
    }
    return false;
}

//função do express para tratar erros do servidor
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port == 'string' ?
    'Pipe ' + port:
    'Port ' + port;

    switch (error.code) {
        case 'EACESS':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADORINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe' + addr
        : 'port' + addr.port;
    debug('Listening on ' + bind);
}

