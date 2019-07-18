//selecting the elements in the DOM//
const addItemButton = document.querySelector('.addTask');
const addInput = document.querySelector('.addInput');
const listUL = document.querySelector('ul');
const lis = listUL.children;
const section = document.querySelector('.section');
const complete = document.getElementById("completed");


//This creates the list item entered in the text input and assigns it to ULtag//
addItemButton.addEventListener('click',() =>{
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  let label = document.createElement('LABEL');
  li.appendChild(label);
  li.textContent = addInput.value.toUpperCase();
  label.value = li.textContent;

  attachListItemButtons(li);
  ul.appendChild(li);
  checkBox();
  addInput.value = '';
});

//This creates the button elements up,down,remove//
function attachListItemButtons (li) {
  let label = document.createElement('LABEL');
    label.className = 'mylabel';
  let up = document.createElement('button');
    up.className = 'up';
    up.textContent = 'Up';
    li.appendChild(up);
  let down = document.createElement('button');
    down.className = 'down';
    down.textContent = 'Down';
    li.appendChild(down);
  let remove = document.createElement('button');
    remove.className = 'remove';
    remove.textContent = 'Remove';
    li.appendChild(remove);
  let reminder = document.createElement('button');
      reminder.className = 'reminder';
      reminder.textContent ='Reminder';
      li.appendChild(reminder);
  let checkbox = document.createElement('input');
    checkbox.className = 'checkbox';
    checkbox.type = 'checkbox';
    checkbox.name = 'checkbox';
    li.appendChild(checkbox);
}
//This enables the use of the buttons, up,down and remove//
listUL.addEventListener('click',(event) => {
  if(event.target.tagName ==='BUTTON'){
    if(event.target.className ==='remove'){
    let li = event.target.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li);
    checkBox();
   }
  }
  if(event.target.className ==='up'){
    let li = event.target.parentNode;
    let prevLi = li.previousElementSibling;
    let ul = li.parentNode;
    if(prevLi){
      ul.insertBefore(li, prevLi);
    }
  }
  if(event.target.className ==='down'){
    let li = event.target.parentNode;
    let nextLi = li.nextElementSibling;
    let ul = li.parentNode;
    if(nextLi){
      ul.insertBefore(nextLi, li);
    }
  }
  if (event.target.className === 'reminder'){
    let li = event.target.parentNode;
    let ul = li.parentNode;
    userInput(setInterval(timeIt,1000));
}
  if(event.target.className ==='checkbox'){
    let li = event.target.parentNode;
    let ul = li.parentNode;
    checkBox();
  }
});
//This cycles through the created buttons up,down,remove to assign to any li tags//
for(let i=0; i<lis.length; i+=1){
  attachListItemButtons(lis[i]);
}

//Logs total value of checked items.//
function checkBox() {
  let ul = document.getElementsByTagName('ul')[0];
  let list =  document.getElementsByTagName('li');
  let numOfChecked = 0;
  let checkedBoxes = document.querySelectorAll("input[name=checkbox]");
  if (checkedBoxes.length === 0) {
  complete.innerHTML = numOfChecked + '/' + checkedBoxes.length;
  }
  for (let i =0; i<checkedBoxes.length; i++){
    if (checkedBoxes[i].checked === true) {
        list[i].classList.toggle('objectives',true);
        numOfChecked++;
        complete.innerHTML = numOfChecked + '/' + checkedBoxes.length;
      }
      else  if (checkedBoxes[i].checked === false){
        list[i].classList.toggle('objectives',false);
        numOfChecked.value = checkedBoxes.length;
        complete.innerHTML = numOfChecked + '/' + checkedBoxes.length;
      }
}}

//Function to set a reminder for a selected task//
var counter = 0;
var timeleft = 500;

function convertSeconds(s){
var min = Math.floor(s / 60);
  var sec = s % 60;
  return (min.toPrecision(2)) + ': ' + (sec.toFixed(2));
}
function timeIt() {
  var timer = document.getElementById('timer')
  timer.innerHTML = timeleft - counter;
  counter++;
  if (timeleft - counter < 0){
    alert('REMINDER!!!!!!');
    clearInterval();
  }
}
function userInput() {
  var userNumber = prompt('Enter a reminder in seconds');
  timeleft = parseInt(userNumber);
}
