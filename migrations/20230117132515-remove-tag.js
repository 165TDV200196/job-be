'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('tagWorks')
            .then(() => queryInterface.dropTable('UserTags'))
            .then(() => queryInterface.dropTable('TagFormCVs'))
            .then(() => queryInterface.dropTable('tagCandidates'))
            .then(() => queryInterface.dropTable('tags'))
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('TagWorks', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            tagId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Tags",
                    key: "id"
                },
                onDelete: 'CASCADE'
            },
            workId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Works",
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
        }).then(() => queryInterface.createTable('UserTags', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            tagId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Tags",
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
        })).then(() => queryInterface.createTable('TagFormCVs', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            tagId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Tags",
                    key: "id"
                },
                onDelete: 'CASCADE'
            },
            formCVId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "FormCVs",
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
        })).then(() => queryInterface.createTable('TagCandidates', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            candidateId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Candidates",
                    key: "userId"
                },
                onDelete: 'CASCADE'
            },
            tagId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Tags",
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
        })).then(() => queryInterface.createTable('Tags', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
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
        }))
    }
};
