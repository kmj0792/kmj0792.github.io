const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");
const USER_LS = "currentUser",
  SHOWING_CN = "showing";



function addJavascript(jsname) {

    var th = document.getElementsByTagName('head')[0];
  
    var s = document.createElement('script');
  
    s.setAttribute('type','text/javascript');
  
    s.setAttribute('src',jsname);
  
    th.appendChild(s);
  
}

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  const date=new Date();
  const hours = date.getHours();
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  if(hours>=6 && hours <=11)
  {greeting.innerText = `${text}, Good morning`;}
  else if(hours>=12 && hours <=15)
  {greeting.innerText = `Good afternoon ${text} !`;}
  else if(hours>=17 && hours <=20)
  {greeting.innerText = `Good evening ${text}`;}
  else if(hours>=21 && hours <=24)
  {greeting.innerText = `Good night ${text}`;}
  else 
  {
    greeting.innerText = `How are you ${text}?`;
  }
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    // she is not
    askForName();


  } else {
    paintGreeting(currentUser);
    //addJavascript('C:/Users/admin/Desktop/js-basics/todo.js');
    
  }
}

function init() {
  loadName();
}
init();