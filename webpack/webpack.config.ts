const ENV = process.env.NODE_ENV;

console.log(`Reactive-Stub is building for ${ENV}`);

module.exports = [require('./webpack.client'), require('./webpack.server')];
