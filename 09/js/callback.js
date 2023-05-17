function displayA() {
    console.log("A");
}

function displayB(callback) {
    // callback === displayC()
    setTimeout(() => {
        // 지정한 밀리초 시간 후에 명령문 실행
        console.log("B");
        callback();
    }, 2000);
}

function displayC() {
    console.log("C")
}

displayA();
displayB(displayC);