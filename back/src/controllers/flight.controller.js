const { getDbConnection } = require('../db');

module.exports = {
    getFlight: async function (req, res) {
        const sequelize = await getDbConnection();
        res.status(200).send(
            await sequelize.models.flight.findOne({
                where: {
                    id: req.params.id,
                },
            }),
        );
    },

    getFlights: async function (req, res) {
        const sequelize = await getDbConnection();
        console.log(sequelize.models);
        const flights = await sequelize.models.flight.findAll({
            raw: true,
        });
        res.status(200).send(flights);
    },
    createFlight: async function (req, res) {
        const sequelize = await getDbConnection();
        res.status(200).send(await sequelize.models.flight.create(req.body));
    },
    deleteFlight: async function (req, res) {
        const sequelize = await getDbConnection();
        const flight = await sequelize.models.flight.findOne({
            where: {
                id: req.params.id,
            },
        });
        if (!flight) res.status(500).send(false);
        flight.destroy();
        res.status(200).send(true);
    },
    editFlight: async function (req, res) {
        const sequelize = await getDbConnection();
        let flight = await sequelize.models.flight.findOne({
            where: {
                id: req.params.id,
            },
        });
        flight.set(req.body);
        const updated = await flight.save();
        res.status(200).send(updated);
    },
};
