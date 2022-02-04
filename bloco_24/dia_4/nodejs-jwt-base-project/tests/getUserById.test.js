const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const jwt = require('jsonwebtoken');

const app = require('../api/server');
const { User } = require('../models');
const { User: userMock } = require('./mock/models');

chai.use(chaiHttp);
const { expect } = chai;

describe('Rota /api/users/:id', () => {
  before(() => {
    // sinon.stub(User, 'findOne').resolves(null);
    sinon.stub(User, 'findOne')
      .callsFake(userMock.findOne);
  });

  after(() => {
    User.findOne.restore();
  });
  describe('Quando o token não é informado', async () => {
    let response;
    before(async () => {
      response = await chai.request(app).get('/api/users/1').set('test', 'test').send({});
    });
    it('retorna http-status 404', () => {
      expect(response.status).to.equals(404);
    });
    it('retorna um objeto', () => {
      expect(response).to.be.an('object');
    });
    it('o objeto contem uma chave message', () => {
      expect(response.body).to.have.property('message');
    });
    it('a chave message possua o texto "token não informado"', () => {
      expect(response.body.message).to.equals('token não informado');
    });
  });
  describe('Quando o token é informado', () => {
    let response;

    before(async () => {
      const loginResponse = await chai.request(app).post('/api/login').send({
        id: '1',
        username: 'Saul Reixas',
        password: 'tocasaul',
      });

      response = await chai
        .request(app)
        .get('/api/users/1')
        .set('authorization', loginResponse.body.token);
    });

    it('retorna status http 200', () => {
      expect(response).to.have.status(200);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.an('object');
    });

    it('o objeto contém uma propriedade "username"', () => {
      expect(response.body).to.have.property('username');
    });
  });
});