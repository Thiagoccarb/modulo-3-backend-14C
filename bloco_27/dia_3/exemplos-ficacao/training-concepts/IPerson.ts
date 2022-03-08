export default interface IPerson {
  name: string;
  CPF: number;
  birthDate: Date;
  getAge(): number;
}