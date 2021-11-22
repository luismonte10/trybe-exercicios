const RIGHT_ANSWERS =   ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const pontos = (gabarito, respostas, pontos) => {
  return pontos(gabarito, respostas);
}

const verificaResposta = (gabarito, respostaEstudante) => {
  let quantPontos = 0;
  for (let i = 0; i < gabarito.length; i += 1) {
    if (respostaEstudante[i] === 'N.A') {
      quantPontos += 0;
    } else if (gabarito[i] === respostaEstudante[i]) { 
      quantPontos += 1;
    } else {
      quantPontos -= 0.5;
    }
  }
  return quantPontos;
}

console.log(pontos(RIGHT_ANSWERS, STUDENT_ANSWERS, verificaResposta));
