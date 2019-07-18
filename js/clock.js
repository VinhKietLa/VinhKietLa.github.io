function getTime() {
let fullDate = new Date();
let day = fullDate.getDate();
let month = fullDate.getMonth()+1;
let year = fullDate.getFullYear();
let hours = fullDate.getHours();
let mins = fullDate.getMinutes();
let secs = fullDate.getSeconds();

if (hours < 10){
  hours = "0" + hours;
}
if (mins < 10){
  mins = "0" + mins;
}
if (secs < 10){
  secs = "0" + secs;
}
if (month < 10){
  month = "0" + month;
}
if ( day < 10) {
  day = "0"+ day;
}
document.getElementById('hour').innerHTML = hours;
document.getElementById('minute').innerHTML = ":" + mins;
document.getElementById('second').innerHTML = ":" + secs;
document.getElementById('dmy').innerHTML = day + '/'+ month + '/' + year;
dmy.style.color = 'black';
}

setInterval(getTime,100);
