switch (process.env.NODE_ENV) {
    case 'prod':
    case 'production':
        module.exports = require('./config/webpack.prod');
        break;
    case 'test':
    case 'testing':
        module.exports = require('./config/webpack.test');
        break;
    default:
    case 'dev':
    case 'development':
        module.exports = require('./config/webpack.dev');
}
