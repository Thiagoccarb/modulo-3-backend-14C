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

const removeById = async() => {
  const bytes = await readFile(simpsonsName);
  const array = JSON.parse(bytes);
  const newArray = array.filter((name) => Number(name.id) !== 6 && Number(name.id) !== 10 );
  await writeFile(simpsonsName, JSON.stringify(newArray))
}

removeById()
  .then((result) => readFile(simpsonsName))
  .then((result => console.log(JSON.parse(result))))
  .catch((error) => console.log(error));
