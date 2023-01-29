'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.renameColumn('Works', 'request', 'quantity');
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.renameColumn('Works', 'quantity', 'request');
    }
};
