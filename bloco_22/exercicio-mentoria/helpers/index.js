const readFile = require('./helpers/readFile');
const writeFile = require('./helpers/writeFile');


const file1 = './arquivo1.txt';
const file2 = './arquivo2.txt';

const readFiles = async (...files) => {
  let promisesArray = [];
  files.forEach((el) => {
    promisesArray = [...promisesArray, readFile(el)];
  })
  const data = (await Promise.all(promisesArray))
  .join('\n')
  .split('\n');
  const newData = data.reduce((acc, curr) => {
    acc[curr.split('-')[0].trim()] = curr.split('-')[1].trim();
    return acc;
  }, {});
  writeFile('./purchases.json', newData);
  return newData;
};



console.log(readFiles(file1, file2)
  .then((data) => console.log(data)));