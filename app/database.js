const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.PG_URL, {
    define: {
        underscored: true,
        timestamps: true
    }
});

module.exports = sequelize;