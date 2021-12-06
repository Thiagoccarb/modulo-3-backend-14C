const threeNumbers = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if( isNaN(a) || isNaN(b) || isNaN(c)) {
      throw new Error('informe apenas números');
    }
    const result = (a + b) * c;
    if (result < 50) {
      throw new Error('Valor muito baixo');
    }
  });
}

const randomNumbers = Array.from({ length: 3 },() => Math.floor(Math.random() * 100 + 1)) ;

threeNumbers(...randomNumbers)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));

// --------------------async/await------------//

const getResult = async() => {
  try {
    const result = await(threeNumbers(...randomNumbers));
    console.log(result);
  }catch(error) {
    console.log(error.message);
  };
}