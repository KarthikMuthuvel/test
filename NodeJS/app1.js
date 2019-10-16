const EventEmitter = require ('events');
//const emitter = new EventEmitter();
const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', (eventArg) => {
    console.log('listener called', eventArg);
    });
logger.log('message');