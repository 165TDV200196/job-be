'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('FormCVs')
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('FormCVs', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            avatar: {
                type: Sequelize.STRING
            },
            status: {
                type: Sequelize.INTEGER
            },
            content: {
                type: Sequelize.TEXT
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    }
};
