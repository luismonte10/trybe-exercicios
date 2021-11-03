const listaEstados = document.getElementById('estado');
let estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']

for (let i = 0; i < estados.length; i += 1) {
  const criaEstados = document.createElement('option');
  listaEstados.appendChild(criaEstados);
  criaEstados.innerText = estados[i];
}

function teste(event) {
  event.preventDefault();
}

const bttSubimit = document.getElementById('bttSubmit');
bttSubimit.addEventListener('click', teste);
