"use strict";
class Student {
    constructor(name, enrollment) {
        this._name = name;
        this._enrollment = enrollment;
        this._testScores = [];
        this._workScores = [];
    }
    get name() {
        return this._name;
    }
    get enrollment() {
        return this._enrollment;
    }
    get testScores() {
        return this._testScores;
    }
    get workScores() {
        return this.workScores;
    }
    set name(newName) {
        this._name = newName;
    }
    set enrollment(newEnrollment) {
        this.enrollment = newEnrollment;
    }
    set testScores(scores) {
        if (scores.length > 4)
            throw new Error('should have up to 4 scores');
        this._testScores = scores;
    }
    set workScores(scores) {
        if (scores.length > 2)
            throw new Error('should have up to 2 scores');
        this._workScores = scores;
    }
    sum() {
        const testScoreSum = this.testScores.reduce((sum, score) => sum + score, 0);
        const worksScoreSum = this.testScores.reduce((sum, score) => sum + score, 0);
        return testScoreSum + worksScoreSum;
    }
    average() {
        const total = this.sum();
        const divisor = 6;
        const avg = total / divisor;
        return avg;
    }
}
;
const student1 = new Student('Thiago', 9);
student1.sum();
console.log(student1.sum());
