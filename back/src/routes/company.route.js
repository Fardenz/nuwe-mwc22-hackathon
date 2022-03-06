// import express
const { Router } = require('express');
const router = Router();

//import controllers
const companyCtrl = require('../controllers/company.controller');

// define the different routes

router.get('/companies', companyCtrl.getCompanies);
router.post('/companies', companyCtrl.createCompany);
router.get('/companies/:id', companyCtrl.getCompany);
router.put('/companies/:id', companyCtrl.editCompany);
router.delete('/companies/:id', companyCtrl.deleteCompany);

//export the module
module.exports = router;
