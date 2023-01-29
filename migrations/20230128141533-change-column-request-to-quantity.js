'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.changeColumn('Works', 'request', {
            type: Sequelize.INTEGER,
            name: 'quantity'
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.changeColumn('Works', 'quantity', {
            type: Sequelize.TEXT,
            name: 'request'
        });
    }

};
