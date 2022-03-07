import { Pizza } from './exercise6';

type CommonFlavor = 'Calabresa' | 'Peperoni' | 'Frango';
type VegFlavoor = 'Marguerita' | 'Palmito' | 'Cogumelo';
type SweetFlavor = 'Nutela' | 'Goiabada com Queijo' | 'Marshmallow';


interface OrdinaryPizza extends Pizza {
  flavor: CommonFlavor;
  slices: 4 | 6 | 8;
};
interface VegPizza extends Pizza {
  flavor: VegFlavoor;
  slices: 4 | 6 | 8;
};
interface SweetPizza extends Pizza {
  flavor: SweetFlavor;
  slices: 4;
};

const ordinaryPizza: OrdinaryPizza = {
  flavor: 'Calabresa',
  slices: 8,
};

const vegPizza: VegPizza = {
  flavor: 'Palmito',
  slices: 8,
};

const weetPizza: SweetPizza = {
  flavor: 'Nutela',
  slices: 4,
};