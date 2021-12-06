const { readFile, writeFile } = require('fs').promises
const simpsonsName = 'simpsons.json';

const  getNames = async() => {
  try {
    const bytes = await readFile(simpsonsName);
    const names = JSON.parse(bytes);
    names.forEach((e, i) => console.log(`${i + 1} - ${e.name}`));
  } catch(error) {
    console.log(error.message);
  }
}
// getNames();

const getNamesById = async (id) => {
  const bytes = await readFile(simpsonsName);
  return new Promise((resolve, reject) => {
    const names = JSON.parse(bytes);
    if(!names.some((el) => el.id === id) === false) {
      reject('id não encontrado')
    }
    resolve(names.find((name) => Number(name.id) === id).name);
  });
}

// getNamesById(5)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

const removeId6And10 = async() => {
  const bytes = await readFile(simpsonsName);
  const array = JSON.parse(bytes);
  const newArray = array.filter((name) => Number(name.id) !== 6 && Number(name.id) !== 10 );
  await writeFile(simpsonsName, JSON.stringify(newArray))
}

// removeId6And10()
//   .then((result) => readFile(simpsonsName))
//   .then((result => console.log(JSON.parse(result))))
//   .catch((error) => console.log(error));

  const createSimpsonFamily = async() => {
    const bytes = await readFile(simpsonsName);
    const array = JSON.parse(bytes);
    let newArray = [];
    array.forEach((name) => {
      if(name.id <= 4) {
        newArray = [...newArray, name]
      }
    });
    await writeFile('simpsonsFamily.json', JSON.stringify(newArray))
  }

// createSimpsonFamily();

const createCharacter = async(char) => {
  const bytes = await readFile('simpsonsFamily.json');
  const array = JSON.parse(bytes);
  let id = array[array.length - 1].id;
  const newArray = [...array, { id: `${Number(id) + 1}`, name: char }];
  await writeFile('simpsonsFamily.json', JSON.stringify(newArray))
}

// createCharacter('Nelson Muntz');

const replaceCharacter = async(char) => {
  const bytes = await readFile('simpsonsFamily.json');
  const array = JSON.parse(bytes);
  array.forEach((el) => {
    if(el.name === 'Nelson Muntz') {
      el.name = 'Maggie Simpson'
    }
  });
  await writeFile('simpsonsFamily.json', JSON.stringify(array))
}

// replaceCharacter();

const createFiles = async(data) => {
  let array = [];
  const promiseArray = data.map((el, i) => writeFile(`./file${i + 1}.txt`, el));
  const result = await Promise.all(promiseArray);
  const fileNames = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ];
  try {
    const fileContent = fileNames.map((el) => readFile(el));
    const files = await Promise.all(fileContent);
    files.forEach((el) => {
      array = [...array, el.toString()]
    });
    const phrase = array.join(' ')
    await writeFile('fileAll.txt', phrase);
  } catch(error) {
    console.log(error);
  }
}
createFiles(['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']);
