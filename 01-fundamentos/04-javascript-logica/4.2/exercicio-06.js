let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let quant = 0;

for(let i = 0; i < numbers.length; i += 1){
  if (numbers[i] % 2 == 0){
    quant += 1;
  }
}
console.log(quant);
