class Student {
  private _enrollment: number;
  private _name: string;
  private _testScores: number[];
  private _workScores: number[];

  constructor(name: string, enrollment: number) {
    this._name = name;
    this._enrollment = enrollment;
    this._testScores = [];
    this._workScores = [];
  }

  get name(): string {
    return this._name;
  }

  get enrollment(): number {
    return this._enrollment;
  }

  get testScores() {
    return this._testScores;
  }

  get workScores() {
    return this.workScores;
  }
  set name(newName: string) {
    this._name = newName;
  }

  set enrollment(newEnrollment: number) {
    this.enrollment = newEnrollment;
  }

  set testScores(scores: number[]) {
    if (scores.length > 4) throw new Error('should have up to 4 scores');
    this._testScores = scores;
  }

  set workScores(scores: number[]) {
    if (scores.length > 2) throw new Error('should have up to 2 scores');
    this._workScores = scores;
  }

  sum(): number {
    const testScoreSum: number = this.testScores.reduce((sum, score) => sum + score, 0);
    const worksScoreSum: number = this.testScores.reduce((sum, score) => sum + score, 0);
    return testScoreSum + worksScoreSum;
  }

  average(): number {
    const total = this.sum();
    const divisor = 6;
    const avg = total / divisor;
    return avg;
  }
};

const student1 = new Student('Thiago', 9);
student1.sum()
console.log(student1.sum());