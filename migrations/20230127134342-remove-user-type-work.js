'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('UserTypeOfWorks')
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('UserTypeOfWorks', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            typeofworkId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "TypeOfWorks",
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
