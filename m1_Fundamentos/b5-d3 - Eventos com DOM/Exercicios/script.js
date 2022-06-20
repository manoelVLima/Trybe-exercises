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
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  // Escreva seu código abaixo.
  function createDaysOfTheMonth() {
    const getDaysList = document.querySelector('#days');
    for(let index = 0; index < dezDaysList.length; index += 1){
      const day = dezDaysList[index];
      const dayItem = document.createElement('li')

      if (day === 24 || day === 31){
        dayItem.className = 'day holiday';
        dayItem.innerHTML = day;
        getDaysList.appendChild(dayItem);
      } else if (day === 4 || day === 11 || day === 18){
        dayItem.classList = 'day friday';
        dayItem.innerHTML = day;
        getDaysList.appendChild(dayItem);
      } else if ( day === 25 ){
        dayItem.className = 'day holiday friday';
        dayItem.innerHTML = day;
        getDaysList.appendChild(dayItem);
      } else {
        dayItem.className = 'day';
        dayItem.innerHTML = day;
        getDaysList.appendChild(dayItem);
      }
    }
  };
createDaysOfTheMonth();

function HolidayBtn(buttonName){
  const divBtn = document.querySelector('.buttons-container');
  const newBtn = document.createElement('button');
  newBtn.id = 'btn-holiday';
  newBtn.innerHTML = buttonName;
  divBtn.appendChild(newBtn);

}
HolidayBtn('Feriados');

function clickEvent(){
  const array = [4,11,18,25]
  const dayFriday = document.getElementsByClassName('friday');
  const sexta = 'SEXTOU!'
  for(let index = 0; index < dayFriday.length; index += 1){
    if(dayFriday[index].innerHTML !== sexta){
      dayFriday[index].innerHTML = sexta
    } else{
      dayFriday[index].innerHTML = array[index];
    }
  }

};

function Friday(string){
  const divBtn = document.querySelector('.buttons-container');
  const newBtn = document.createElement('button');
  newBtn.id = 'btn-friday';
  newBtn.innerHTML = string;
  newBtn.addEventListener('click',clickEvent);
  divBtn.appendChild(newBtn);
}
Friday('Sexta-feira');

function zoomIn(){
  const getDays = document.querySelector('#days')
  getDays.addEventListener('mouseover',(event) => {
    const days = event.target;
    if(days.classList.contains('day')){
      days.style.fontSize = '25px';
    }
  } )
  getDays.addEventListener('mouseout', (event) => {
    const days = event.target;
    if(days.classList.contains('day')){
      days.style.fontSize = '20px';
    }
  })
}
zoomIn();

function createTask(task){
  const taskList = document.querySelector('.my-tasks');
  const newTask = document.createElement('span');
  newTask.innerHTML = task;
  taskList.appendChild(newTask);

}
 createTask('Cozinhar');