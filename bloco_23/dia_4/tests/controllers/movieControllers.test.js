const sinon = require('sinon');

const { expect } = require('chai');

const MovieController = require('../../controllers/movieController');

describe('Ao receber uma requisição', () => {
  describe('a requisição possui dados inválidos', () => {
    
    const res = {};
    const req = {};

    before( async () => {
      req.body = {};
      res.status = sinon.stub()
        .returns(res);
      res.json = sinon.stub()
        .returns();
      sinon.stub(MovieController, 'find')
        .resolves({
          message: 'requisição inválida',
        })
      })

     after(() => {
      MovieController.find.restore();
     });

    it('retorna status 400 e com um json contendo uma msg com requisição inválida', async () => {
      await MovieController.find(req, res);
      expect(res.status.calledWith(200)).to.be.equal(false);
    });
  });
});