'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

    },
    down: async (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.removeColumn('Companies', 'nation'),
            queryInterface.removeColumn('Companies', 'scale'),
            queryInterface.removeColumn('Companies', 'role'),
        ]);
    },
};
