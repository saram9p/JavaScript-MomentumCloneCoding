const API_KEY = "b03fe841519b53eb2fdd6b4b153a5a43";

function onGeoOk(position){
    const lat = position.coords.latitude; // 위도
    const lng = position.coords.longitude; // 경도
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url) // 자바스크립트가 대신 url을 부른다.
        .then(response =>response.json())
        .then(data =>{
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}도`;
        });
}

function onGeoError(){
    alert("당신을 찾을 수 없습니다. 날씨가 제공되지 않습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); // 브라우저에서 위치 좌표를 준다.(Wifi, Gps 등등), getCurrentPosition 함수는 성공하면 첫번째를 실패하면 두번째 함수를 실행한다.