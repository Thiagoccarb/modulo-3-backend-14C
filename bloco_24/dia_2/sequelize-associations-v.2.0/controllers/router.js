const router = require('express').Router({ mergeParams: true });

const patient = require('./patients');
const plan = require('./plans');
const surgery = require('./surgeries');
const patientSurgeries = require('./patient-surgeries');


router.post('/patients', patient.create);
router.post('/plans', plan.create);
router.post('/surgeries', surgery.create);
router.post('/patient-surgeries', patientSurgeries.create);
router.get('/patient-surgeries', patientSurgeries.getAll);
router.get('/patients', patient.getAll);
router.get('/patients-plans', patient.getAllPatientsInfo);


module.exports = router;

