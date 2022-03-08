// ./src/index.ts

 type Discipline = {
  name: string;
  grade: number;
  letterGrade?: string;
};

 type Student = {
  name: string;
  disciplines: Discipline[];
};

const roundNumber = (number: number): number => {
  let result = 0.5;
  if (number >= 0.9) result = 0.9;
  if (number >= 0.8) result = 0.8;
  if (number >= 0.7) result = 0.7;
  if (number >= 0.6) result = 0.6;
  return result;
}

const convertGradesToLetter = ({ name, grade }: Discipline): Discipline => {
  const value: number = roundNumber(grade);
  let letterGrade;
  switch (value) {
    case 0.9:
      letterGrade = 'A';
      break;
    case 0.8:
      letterGrade = 'B';
      break;
    case 0.7:
      letterGrade = 'C';
      break;
    case 0.6:
      letterGrade = 'D';
      break;
    default:
      letterGrade = 'E';
  }
  return {
    name, grade, letterGrade
  };
};

/* "Converter" */
const percentageGradesIntoLetters = ({ name, disciplines }: Student) => ({
  name,
  disciplines: disciplines.map((convertGradesToLetter)),
});

/* "Determinar" */
const approvedStudents = ({ disciplines }: Student): boolean =>
  disciplines.every(
    ({ grade }) => grade > 0.7
  );

/* "Atualizar" */
const updateApprovalData = ({ name: studentName, disciplines }: Student): void => {
  console.log(`A pessoa com nome ${studentName} foi aprovada!`);

  disciplines.map(({ name, letterGrade }) =>
    console.log(`${name}: ${letterGrade}`));
};

function setApproved(students: Student[]): void {
  students
    .map(percentageGradesIntoLetters)
    .filter(approvedStudents)
    .map(updateApprovalData);
}

/*
  Não se esqueça que é necessário exportar ao final as funções para que você
  possa testa-las
*/
export {
  percentageGradesIntoLetters,
  approvedStudents,
  updateApprovalData,
  setApproved,
};