const jwt = require('jsonwebtoken');
const chaiHttp = require('chai-http');
const chai = require('chai');
const sinon = require('sinon')

const { User } = require('../models');
const { User: userMock } = require('./mock/models');
const app = require('../api/server');

const { expect } = chai;

chai.use(chaiHttp);

const ENDPOINT = '/api/login';
const REQUIRED = 'É necessário usuário e senha para fazer login';
const INVALID = 'Usuário não existe ou senha inválida';
const SUCCESSFULL = 'Login efetuado com sucesso';

describe('POST /api/login', () => {
  before(() => {
    sinon.stub(User, 'findOne').callsFake(userMock.findOne)
  });

  after(() => {
    User.findOne.restore();
  });
  describe('quando usuário ou senha não são informados', () => {
    let response;
    before(async () => {
      response = await chai.request(app).post(ENDPOINT).send({});
    });
    it('retorna um resposta com status 401', () => {
      expect(response).to.have.status(401);
    });
    it('retorna um objeto', () => {
      expect(response.body).to.be.an('object');
    });
    it('o objeto tem a propriedade message', () => {
      expect(response.body).to.have.property('message');
    });
    it('a propriedade message tem a mensagem "É necessário usuário e senha para fazer login"', () => {
      expect(response.body.message).to.equals(REQUIRED);
    });
  });
  describe('quando usuário e senha não são inválidos', () => {
    let response;
    before(async () => {
      response = await chai.request(app).post(ENDPOINT).send({
        username: 'test',
        password: 'test123'
      });
    });
    it('retorna um resposta com status 401', () => {
      expect(response).to.have.status(401);
    });
    it('retorna um objeto', () => {
      expect(response.body).to.be.an('object');
    });
    it('o objeto tem a propriedade message', () => {
      expect(response.body).to.have.property('message');
    });
    it('a propriedade message tem a mensagem "Usuário não existe ou senha inválida"', () => {
      expect(response.body.message).to.equals(INVALID);
    });
  });
  describe('quando usuário e senha são válidos', () => {
    let response;
    before(async () => {
      response = await chai.request(app).post(ENDPOINT).send({
        username: "Saul Reixas",
        password: "tocasaul"
      });
    });
    it('retorna um resposta com status 201', () => {
      expect(response).to.have.status(201);
    });
    it('retorna um objeto', () => {
      expect(response.body).to.be.an('object');
    });
    it('o objeto tem a propriedade message', () => {
      expect(response.body).to.have.property('message');
    });
    it('a propriedade message tem a mensagem "Login efetuado com sucesso"', () => {
      expect(response.body.message).to.equals(SUCCESSFULL);
    });
    it('retorne um token JWT contendo o username utilizado no login', () => {
      const { token } = response.body;
      const payload = jwt.decode(token);
      expect(payload.username).to.equal('Saul Reixas');
    });
  });
});

