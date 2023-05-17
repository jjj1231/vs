fetch('https://jsonplaceholder.typicode.com/users')
    .then((Response) => Response.json())
    // 성공적으로 가져왔다면 객체화 시킬꺼야
    .then((user) => { console.log(user) });
// 객체화 잘 가져온다면 콘솔에 찍어줘


async function init() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // fetch()가 성공적이라면 (await) 결과값을 response에 저장 
    const users = await response.json();
    // response.json() (가지고 온 json 데이터를 객체로 변환) 성공했다면, 결과값을 user 변수에 저장
    console.log(users);
    display(users);


}


// init();  // 선언만 했기 때문에 불러줘야함

function display(users) {
    const result = document.querySelector('#result');
    let output = ''; // 화면에 표시할 태그를 저장할 output 변수 생성
    users.forEach((user) => {
        // for(let user=0; user < users.length; user++)
        // for(let user of users){}
        output += `
                    <table>
                        <tr>
                            <th>이름</th>
                            <td>${user.name}</td>
                        </tr>
                        <tr>
                            <th>아이디</th>
                            <td>${user.username}</td>
                        </tr>
                        <tr>
                            <th>이름</th>
                            <td>${user.email}</td>
                        </tr>
                    </table>
            `
    });

    result.innerHTML = output;
}
