let xhr = new XMLHttpRequest(); //XMLHttpReqeust 객체 생성
xhr.open("GET", "ajax/students.json");
// student.html(실행 위치)를 기준으로 경로를 찾고 있다. 
xhr.send();


console.log(xhr);

xhr.onreadystatechange = function () {

    if (xhr.readyState === 4 && xhr.status === 200) {
        let students = JSON.parse(xhr.responseText);
        console.log(students); // 어떤 객체가 들어있는지 확인
        renderHTML(students); // HTML 화면에 내용을 표시하는 함수
    }
}
// HTML 화면에 내용을 표시하는 함수 선언
function renderHTML(contents) {
    let output = "";
    for (let content of contents) {
        //for(let content = 0; content < contents.length; content++)
        output += `
            <h2>${content.name}</h2>
            <ul>
                <li>전공 : ${content.major}</li>
                <li>학년 : ${content.grade}</li>
            </ul>
            <hr>
        `;
    }

    document.body.innerHTML = output;
}

