function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

//exercicio 01
function diasDoMes(){
  for(let i = 0; i < dezDaysList.length; i += 1) {
    let diaMes = document.createElement('li');
    diaMes.className = 'day'
    diaMes.innerText = dezDaysList[i];
    let mesCompleto = document.querySelector('#days');
    mesCompleto.appendChild(diaMes);

    if(dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 26){
      diaMes.className = 'day holiday';
    }
    if(dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18){
      diaMes.className = 'day friday';
    }
    if(dezDaysList[i] === 25){
      diaMes.className = 'day holiday friday';
    }
  }
}

diasDoMes();

//exercicio 02
function createButtonHoliday(param){
  let btn = document.createElement('button');
  btn.id = 'btn-holiday';
  btn.innerText = param;
  let divBtn = document.querySelector('.buttons-container');
  divBtn.appendChild(btn);
}

createButtonHoliday('Feriados');

//exercicio 03
let buttonHoliday = document.getElementById('btn-holiday');

buttonHoliday.addEventListener('click', changeColorHoliday);

let contHoliday = 0;

function changeColorHoliday(){
  contHoliday += 1;
  if(contHoliday % 2 !== 0){
    let tamanhoHoliday = document.querySelectorAll('.holiday');
    for(let i = 0; i < tamanhoHoliday.length; i += 1){
    tamanhoHoliday[i].style.backgroundColor = 'green'
    }
  }  
  else if(contHoliday % 2 === 0){
    let tamanhoHoliday = document.querySelectorAll('.holiday');
    for(let i = 0; i < tamanhoHoliday.length; i += 1){
    tamanhoHoliday[i].style.backgroundColor = 'rgb(238,238,238)'
    }

  }

}

//exercicio 04
function createButtonFriday(param){
  let btn = document.createElement('button');
  btn.id = 'btn-friday';
  btn.innerText = param;
  let divBtn = document.querySelector('.buttons-container');
  divBtn.appendChild(btn);
}

createButtonFriday('Sexta-Feira');

//exercicio 05
let buttonFriday = document.getElementById('btn-friday');

buttonFriday.addEventListener('click', changeTextFriday);

let contFriday = 0;

function changeTextFriday(){
  contFriday += 1;
  if(contFriday % 2 !== 0){
    let tamanhoFriday = document.querySelectorAll('.friday');
    for(let i = 0; i < tamanhoFriday.length; i += 1){
      tamanhoFriday[i].innerText = 'Sextou o/';
    }
  }
  else if(contFriday % 2 === 0){
    window.location.reload();
  }
}

//exercicio 06
const day = document.querySelectorAll('.day');

for(let i = 0; i < day.length; i += 1){
  day[i].addEventListener('mouseover', zoomIn);
//  day[i].addEventListener('click', );
  day[i].addEventListener('mouseout', zoomOut);
}

function zoomIn(param){
  param.target.style.fontSize = '35px'
  console.log(param.target);
}

function zoomOut(param){
  param.target.style.fontSize = '20px'
}

//exercicio 07
function createTask(event){
  let span = document.createElement('span');
  span.innerText = event;
  let myDiv = document.querySelector('.my-tasks');
  myDiv.appendChild(span);
}

createTask('Projeto');

//exercicio 08
function divCor(cor){
  let divCor = document.createElement('div');
  divCor.className = 'task';
  divCor.style.backgroundColor = cor;
  let myDiv = document.querySelector('.my-tasks');
  myDiv.appendChild(divCor);
}

divCor('green');
