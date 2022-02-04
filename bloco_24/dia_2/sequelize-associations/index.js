const express = require('express');

const app = express();
const error = require('./middlewares/error');
const plans = require('./controllers/plans');
const patients = require('./controllers/patients');

app.use(express.json());


app.post('/plans', plans.create);
app.delete('/plans/:id', plans.remove);
app.post('/patients', patients.create);
// app.post('/patients-surgeries', patientsSurgeries.create);
// app.post('/surgeries', surgeries.create);
app.get('/patients', patients.listAll);
app.get('/patients-plans', patients.listAllPatientsAndPlan);

app.use(error);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Port: ${PORT}`);
});

module.exports = app; // testing purposes