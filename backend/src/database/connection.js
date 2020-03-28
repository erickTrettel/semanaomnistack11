const knex = require('knex');
const config = require('../../knexfile');

const cfg = process.env.NODE_ENV === 'test' ? config.test : config.development;

const connection = knex(cfg);

module.exports = connection;
