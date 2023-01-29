'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.removeColumn('Companies', 'nation'),
            queryInterface.removeColumn('Companies', 'scale'),
            queryInterface.removeColumn('Companies', 'role'),
        ]);
    },
    down: async (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.addColumn('Companies', 'nation', {
                type: Sequelize.STRING
            }),
            queryInterface.addColumn('Companies', 'scale', {
                type: Sequelize.STRING
            }),
            queryInterface.addColumn('Companies', 'role', {
                type: Sequelize.STRING
            }),
        ]);
    }
};
