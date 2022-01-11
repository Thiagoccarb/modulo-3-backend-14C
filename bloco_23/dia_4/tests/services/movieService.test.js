const sinon = require('sinon');

const { expect } = require('chai');
// const connection = require('../../models/connection');
const MovieService = require('../../services/movieService');

describe('Busca por um filme no banco de dados a partir de um ID', () => {
  describe('quando o ID não retorna um filme', () => {
    before(async () => {
      const response = null;
  
      sinon.stub(MovieService, 'getByID')
        .resolves(response);
    })
  
    after(async () => {
      MovieService.getByID.restore();
    })
  
    it('retorna null', async () => {
      const response = await MovieService.getByID();
      expect(response).to.equal(null);
    });
  });
  describe('quando o ID retorna um filme', () => {
    before(() => {
      sinon.stub(MovieService, 'getByID')
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
      MovieService.getByID.restore();
    })

    it('retorna um objeto', async () => {
      const response = await MovieService.getByID(1);
      expect(response).to.be.an('object');
    });
    it('O objeto possui as prorpiedades do filme', async () => {
      const response = await MovieService.getByID(1);
      expect(response).to.have.property('id');
      expect(response).to.have.property('title');
      expect(response).to.have.property('directedBy');
      expect(response).to.have.property('releaseYear');
    });
  });
});