require('dotenv').config();
const log = require('log4js').getLogger('db');
const { Sequelize } = require('sequelize');

let sequelize;
/**
 *
 * @returns {Promise<import('sequelize').Sequelize>}
 */
async function getDbConnection() {
    if (sequelize) return sequelize;
    return initializeDbModels();
}

/**
 *
 * @returns {Promise<import('sequelize').Sequelize>}
 */
async function initializeDbModels() {
    const uri = process.env.DATABASE_URL || 'postgres://mwc:changeme@localhost:5432/mwc';
    const ssl = process.env.DATABASE_URL && true;
    console.log(ssl, uri);
    const username = uri.split(':')[1].slice(2);
    const password = uri.split('@')[0].split(':')[2];
    const host = uri.split('@')[1].split(':')[0];
    const port = uri.split('@')[1].split(':')[1].split('/')[0];
    const database = uri.split('@')[1].split(':')[1].split('/')[1];

    console.log({
        dialect: 'postgres',
        host: host || 'localhost',
        port: port || 5432,
        username: username || 'mwc',
        database: database || 'mwc',
        password: password || 'changeme',
        ssl: ssl,
    });

    sequelize = new Sequelize(uri, {
        dialect: 'postgres',
        host: host || 'localhost',
        port: port || 5432,
        username: username || 'mwc',
        database: database || 'mwc',
        password: password || 'changeme',
        logging: log.debug.bind(log),
        ssl: ssl,
        dialectOptions: {
            ssl: {
                ssl: ssl,
                rejectUnauthorized: false,
            },
            rejectUnauthorized: false,
        },
    });

    const modelDefiners = [require('../models/Company.model'), require('../models/Flight.model')];
    for (const modelDefiner of modelDefiners) {
        modelDefiner(sequelize);
    }

    await sequelize.sync();
    return sequelize;
}

module.exports = { getDbConnection };
