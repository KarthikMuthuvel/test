const EventEmitter = require ('events');
//const emitter = new EventEmitter();
//var path = 'C:/Users/mkarthikrajakumar/Documents/NodeJS/log.txt';
var url  = 'http://mylogger.io/log';

class Logger extends EventEmitter{
    log(message) {
        // send a request
        console.log(message);
        //raised an event
        this.emit('messageLogged', {id: 1, url : 'www.example.com'});
    }
}

module.exports = Logger;
//module.exports.endPoint = url;