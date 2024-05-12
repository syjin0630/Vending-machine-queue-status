// DOM 요소 캐싱
const color3Element = document.getElementById("color3");
const img3Element = document.getElementById("img3");
const color4Element = document.getElementById("color4");
const img4Element = document.getElementById("img4");

// 시간 업데이트 함수
function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const minutes = ('0' + now.getMinutes()).slice(-2);
    const timeString = `${ampm} ${hours}:${minutes}`;
    document.getElementById("time").innerText = timeString;
}

// 거리에 따른 색상 반환 함수
function getColor(distance) {
    if (distance > 200 && distance <= 300) {
        return "green";
    } else if (distance > 100 && distance <= 200) {
        return "yellow";
    } else {
        return "red";
    }
}

// 색상에 따른 빛 반환 함수
function getLight(color) {
    return color === "green" ? "🟢" : (color === "yellow" ? "🟡" : "🔴");
}

// 색상에 따른 이미지 반환 함수
function getImg(color) {
    if (color === "green") {
        return "🌭  👤";
    } else if (color === "yellow") {
        return "🌭  👤👤";
    } else {
        return "🌭  👤👤👤";
    }
}

// 3층 처리 함수
function handleFloor3() {
    const distance = parseInt(prompt("3층 자판기와 센서의 거리(cm):"));
    const color = getColor(distance);
    color3Element.innerText = getLight(color);
    img3Element.innerText = getImg(color);
}

// 4층 처리 함수
function handleFloor4() {
    const distance = parseInt(prompt("4층 자판기와 센서의 거리(cm):"));
    const color = getColor(distance);
    color4Element.innerText = getLight(color);
    img4Element.innerText = getImg(color);
}

// 시간 업데이트와 초기 데이터 처리
updateTime();
setInterval(updateTime, 1000);
handleFloor3();
handleFloor4();

  