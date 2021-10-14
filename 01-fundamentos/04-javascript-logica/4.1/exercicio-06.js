let peça = "bispo";

switch (peça.toLowerCase()) {
  case 'peão':
    console.log("Apenas para frente")
    break;
  case 'torre':
    console.log("Vertical ou horizontal")
    break;
  case 'cavalo':
    console.log("Em forma de L")
    break;
  case 'bispo':
    console.log("Diagonais")
    break;
  case 'rainha':
    console.log("Horizontal, vertical e diagonais")
    break;
  case 'rei':
    console.log("Horizontal, vertical e diagonais")
    break;
  default:
    console.log("Erro! Peça não existe!");
}