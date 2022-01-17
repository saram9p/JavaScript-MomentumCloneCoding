const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
]; // 폴더에 있는 이미지들과 images array에 있는 이미지의 이름이 같게 한다.

const chosenImage = images[Math.floor(Math.random() * images.length)]; // 랜덤한 이미지

const bgImage = document.createElement("img"); // img 라는 element를 생성

bgImage.src = `img/${chosenImage}`;

// document.body.prepend(bgImage); // 이미지가 가장 위에 있게한다, appendChild는 가장 뒤에 있게 한다.
document.body.appendChild(bgImage); // appendChild()는 body에 html을 추가한다.