const {createLogger, transports, format} = require('winston');
const {combine, timestamp, prettyPrint} = format;

export class Logger{
    static logger = createLogger({
        format: combine(timestamp(), prettyPrint()),

        transports: [
            new transports.File({filename: 'errors.log', level: 'error'}),
            new transports.Console({level:'debug'})
        ]
    });
}