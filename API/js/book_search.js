// 요소
let bookName = document.querySelector("#book_name");
let searchBtn = document.querySelector("#search_btn");

// 이벤트 핸들러 생성
searchBtn.addEventListener('click', function (e) {
    // 버튼 기본 동작 해제
    e.preventDefault();

    // 사용자 입력값
    let searchTitle = bookName.value;

    // 인증 키 상수
    const REST_API_KEY = "45e923534fd7ec882c4ee55c820207a2";

    fetch(`https://dapi.kakao.com/v3/search/book?target=title&query=${searchTitle.value}`, {
        headers: {
            Authorization: `KakaoAK ${REST_API_KEY}`
        }
    })
        .then(Response => Response.json())
        // function(response) { return response.json(); }
        // promise 객체 변환 => 성공 결과값으로 response.json() 반환
        .then(renderHTML);
    // function(searchData) { renderHTML(searchData);}

});

function renderHTML(searchData) {
    console.log(searchData);

    const result = document.querySelector('#result');
    let output = ``;



    // console.log(searchData.documents);

    // // for (function key in result) {
    // //     console.log(searchData.documents);
    // // }

    // for (const key in result) {
    //     console.log(searchData.documents);

    // 객체에 for in
    // 배열에 for of

    // for (let i = 0; i < searchData.documents.length; i++) {
    //     console.log(searchData.documents[i]);
    // }

    for (i of searchData.documents) {
        console.log(i); // i 번째 값을 뽑아내겠다는 것 
        // for ... of (카운트 변수(item))
        // 배열 길이만큼 item을 순회   
    }

    searchData.documents.forEach((data) => {
        console.log(data);
        output += `
        <ul style="list-style:none">
            <li><img src=${data.thumbnail}></li>
            <li><span style="color:red;"><b> 저자 : </b></span> ${data.authors} </li>
        </ul>`;



    });
    result.innerHTML = output;




}




