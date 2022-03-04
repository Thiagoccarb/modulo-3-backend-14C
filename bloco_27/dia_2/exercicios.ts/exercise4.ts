export default class Subject {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name( newName: string) {
    if (newName.length < 3) throw new Error ('invalid name');
    this._name = newName;
  }
}