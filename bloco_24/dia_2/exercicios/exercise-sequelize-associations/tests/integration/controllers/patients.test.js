const chai = require('chai');
const { expect } = chai;
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const app = require('../../../index');
const Service = require('../../../services/patientsService');
const Patient = require('../../../controllers/patientsController');
chai.use(chaiHttp);

const error = {
  error: {
    code: 404,
    message: 'no data registered'
  }
}

describe('busca todos os pacientes e seus respectivos planos', () => {
  const res = {};
  const req = {};
  let next = () => { };

  describe('quando não há pacientes cadastrados', () => {
    before(() => {
      sinon.stub(Service, 'listAllPatientsAndPlan').resolves(error);
      next = sinon.stub().returns(error);
    })
    after(() => {
      Service.listAllPatientsAndPlan.restore();
    })
    it('retorna uma mensagem de erro', async () => {
      const test = await chai.request(app).get('/patients/plan')
      expect(test.body).to.be.equals(true);
    })
  });
});