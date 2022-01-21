const router = require('express')
  .Router({ mergeParams: true });

const {
  listAllPatientsPlans,
  listAllPatientsSurgeries,
  listPatientsByPlanId
} = require('.');

router.get('/plan', listAllPatientsPlans);
router.get('/surgery', listAllPatientsSurgeries);
router.get('/plan/:id', listPatientsByPlanId);

module.exports = router;