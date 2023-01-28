'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Recruitments')
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('Recruitments', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            companyId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Companies",
                    key: "id"
                },
                onDelete: 'CASCADE'
            },
            userId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Users",
                    key: "id"
                },
                onDelete: 'CASCADE'
            },
            messager: {
                type: Sequelize.STRING(500)
            },
            link: {
                type: Sequelize.STRING
            },
            status: {
                type: Sequelize.INTEGER
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
