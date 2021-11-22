const megaCena = (numAposta, callback) => {
  min = Math.ceil(1);
  max = Math.floor(5);
  let numSorteado = Math.round(Math.random() * (max - min)) + min;
  console.log(numSorteado);
  return callback (numAposta, numSorteado);
}

const sera = (numCoitado, numAleatorio) => {
  if (numCoitado === numAleatorio) return 'Parabéns você ganhou!'
  return 'Tente novamente!'
};

console.log(megaCena(3, sera));
