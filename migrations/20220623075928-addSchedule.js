'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('NotificationCompanies');
        await queryInterface.dropTable('NotificationUsers');
        await queryInterface.dropTable('TagCandidates');
        await queryInterface.dropTable('Candidates');
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('NotificationCompanies', {
        });
        await queryInterface.createTable('NotificationUsers', {
        });
        await queryInterface.createTable('TagCandidates', {
        });
        await queryInterface.createTable('Candidates', {
        });
    },
};
