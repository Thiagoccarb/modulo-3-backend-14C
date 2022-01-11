const sinon = require('sinon');

const { expect } = require('chai');
const connection = require('../../models/connection');
const MovieModel = require('../../models/movieModel');

describe('Busca por um filme no banco de dados a partir de um ID', () => {

  before(async () => {
    const execute = [[]];

    sinon.stub(connection(), 'execute').resolves(execute);
  })

  after(async () => {
    connection().execute.restore();
  })


  describe('quando o ID não retorna um filme', () => {
    it('retorna um array vazio', async () => {
      const response = await MovieModel.getByID();
      expect(response).to.equal(null);
    });
  });
  describe('quando o ID retorna um filme', () => {
    before(() => {
      sinon.stub(MovieModel, 'getByID')
        .resolves(
          {
            id: 1,
            title: 'Example Movie',
            directedBy: 'Jane Dow',
            releaseYear: 1999,
          }
        );
    });

    after(() => {
      MovieModel.getByID.restore();
    })

    it('retorna um objeto', async () => {
      const response = await MovieModel.getByID(1);
      expect(response).to.be.an('object');
    });
    it('O objeto possui as prorpiedades do filme', async () => {
      const response = await MovieModel.getByID(1);
      expect(response).to.have.property('id');
      expect(response).to.have.property('title');
      expect(response).to.have.property('directedBy');
      expect(response).to.have.property('releaseYear');
    });
  });
});