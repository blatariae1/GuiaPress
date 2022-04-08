const Sequelize = require("sequelize");

const connection = new Sequelize('guiapress', 'sa', 'batman777', {
    host: 'localhost',
    dialect: 'mssql',
    port: '1433',
    timezone: "-03:00"
});

module.exports = connection;