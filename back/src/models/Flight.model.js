const { DataTypes, UUIDV4 } = require('sequelize');

/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 */
module.exports = function (sequelize) {
    return sequelize.define(
        'flight',
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: UUIDV4,
                primaryKey: true,
            },
            company_id: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            date: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            origin_country: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            origin_continent: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            destination_country: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            destination_countinent: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            seats: {
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
            tableName: 'Flight',
        },
    );
};
