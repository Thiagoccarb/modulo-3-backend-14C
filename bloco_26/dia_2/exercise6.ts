export type Slices = 4 | 6 | 8;

export interface Pizza {
  flavor: string;
  slices: Slices;
};

const calabresa: Pizza = {
  flavor: 'Calabresa',
  slices: 8,
};

const marguerita: Pizza = {
  flavor: 'Marguerita',
  slices: 6,
};

const nutela: Pizza = {
  flavor: 'Nutela',
  slices: 4,
};