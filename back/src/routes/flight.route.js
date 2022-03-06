// import express
const { Router } = require('express');
const router = Router();

//import controllers
const flightCtrl = require('../controllers/flight.controller');

// define the different routes

router.get('/flights', flightCtrl.getFlights);
router.post('/flights', flightCtrl.createFlight);
router.get('/flights/:id', flightCtrl.getFlight);
router.put('/flights/:id', flightCtrl.editFlight);
router.delete('/flights/:id', flightCtrl.deleteFlight);

//export the module
module.exports = router;
