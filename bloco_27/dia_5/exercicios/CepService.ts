import FooCepAPI from './FooCepAPI';
import ICep from './ICep';

class CepService {
  private readonly cepApi: ICep;

  constructor(cepApi: ICep) {
    this.cepApi = cepApi;
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAdress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;