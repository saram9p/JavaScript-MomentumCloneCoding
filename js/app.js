const loginInput = document.querySelector("#login-form input"); // id가 login-form 인 element에서 input을 찾는다
const loginButton = document.querySelector("#login-form button"); // id가 login-form 인 element에서 button 찾는다

function onLoginBtnClick(){
    console.dir(loginInput);
    console.log("클릭!");
}

loginButton.addEventListener("click", onLoginBtnClick);