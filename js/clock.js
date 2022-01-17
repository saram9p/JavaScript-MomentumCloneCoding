const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date(); // 현재 날짜, 시간, 분, 초에 대한 정보를 가지고 있다.
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`; // 따옴표가 아니라 백틱으로 해야 한다.
};

getClock(); // 1초 뒤에 함수가 호출 되는 것을 방지하기 위해 바로 함수 호출
setInterval(getClock, 1000);