const loginForm = document.querySelector("#login-form"); 
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; // string만 포함된 변수는 대문자로 표기

const link = document.querySelector("a");

function onLoginSubmit(event){ // 이 함수가 하나의 argument를 받도록 하고 있다.
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username); // 앞은 저장될 아이템의 이름이고 뒤는 값이될 변수다.
    paintGreetings();
}

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`; // greeting에 텍스트를 추가 한다
    greeting.classList.remove(HIDDEN_CLASSNAME); // greeting한테서 HIDDEN_CLASSNAME을 제거한다
}

const  savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME); // loginForm한테서 HIDDEN_CLASSNAME을 제거한다
    loginForm.addEventListener("submit", onLoginSubmit); // loginForm의 submit을 작동시킨다.
} else {
    paintGreetings();
}