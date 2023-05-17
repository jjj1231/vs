fetch("../ajax/students.json")
    .then((response) => response.json()) // json 파일을 객체로 변환
    .then((json) => {
        let output = ""
        json.forEach((student) => {
            output += `
            <h1>${student.name}</h2>
            <ul>
                <li>전공 : ${student.major}</li>
                <li>학년 : ${student.grade}</li>
            </ul>
            <hr>`;
        });
        document.querySelector('#result').innerHTML = output;
    })
    .catch((err) => console.log(err)); //에러가 발생하면 에러 출력


