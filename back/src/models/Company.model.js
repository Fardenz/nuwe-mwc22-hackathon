const { DataTypes, UUIDV4 } = require('sequelize');

/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 */
module.exports = function (sequelize) {
    return sequelize.define(
        'company',
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: UUIDV4,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            website: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            total_flights: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    isNumber: function (val) {
                        if (typeof val == 'number') {
                            return Number.isInteger(val);
                        } else {
                            return false;
                        }
                    },
                },
            },
            total_seats: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    isNumber: function (val) {
                        if (typeof val == 'number') {
                            return Number.isInteger(val);
                        } else {
                            return false;
                        }
                    },
                },
            },
        },
        {
            tableName: 'Company',
        },
    );
};
