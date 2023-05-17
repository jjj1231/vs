// 서버에 있는 JSON 자료를 가지고 와서 성공했는지 체크
// 만약 자료를 가지고 오는데 성공했다면, JSON 자료를 객체로 변환
// 객체 안의 정보 중 상품 이름과 생산 연도를 가져와 화면에 표시


// 서버에 있는 JSON의 자료 위치를 변수로 저장 
const url = "https://reqres.in/api/products/10";
const result = document.querySelector('#result');


// AJAX 기술 사용하기 위해 XHR 객체 인스턴스 생성
let xhr = new XMLHttpRequest();

// 요청 방식, 요청 URL 설정하는 요청 초기화 
xhr.open("GET", url);
// 요청 서버로 전송
xhr.send();

xhr.onreadystatechange = function () {
    // 자료를 잘 가지고 왔는지 체크 
    if (xhr.readyState === 4 && xhr.status === 200) {
        let product = JSON.parse(xhr.responseText);
        // JSON 자료를 객체로 변환하여 product 라는 변수 에
        console.log(product);

        result.innerHTML =
            `<p>상품명 : ${product.data.name} </p>
            <p>생산년도 : ${product.data.year}`;


    }
}

