// 버튼 요소 가지고 오기
const btn = document.querySelector('button');
console.log(btn);

btn.addEventListener('click', function () {
    // XMLHttpRequest 객체 생성
    // XMLHttpRequest 객체의 인스턴스 이름으로 xhr을 사용하겠다.
    let xhr = new XMLHttpRequest();

    // 서버에 전송할 HTTP 요청을 초기화(요청 준비)
    // XMLHttpRequest.open(method, url[, async]) 방식, 자료 위치, 비동기 여부
    xhr.open("GET", "student.json");
    xhr.send();
    // GET 방식이기 때문에 인자 x

    // responseText > 요청에 대한 응답을 문자열 형태로 저장 
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // 자료가 있고, 가져오는 데 성공했다면
            // 문자열 형태로 저장된 해당 자료를 객체 형태로 구조화(파싱) 
            let students = JSON.parse(xhr.responseText);
            // 객체로 바꾼 students에 키가 name인 애가 있다면 name에 해당하는 값을 알림창으로 띄워라
            alert(students.name);
        }
    }

})
