let userID = prompt('사용자 아이디는?');
let userpw = prompt('사용자 패스워드는?');

if (userID !== null && userpw !== null) { // 어떠한 거라도 입력 받은 경우
    if (userID === "abc123" && userpw === "1234") {
        alert(`${userID}님 접속을 환영합니다`);
    } else if (userpw !== "1234") {
        alert('패스워드를 잘못 입력했습니다')
    } else {
        alert('아이디를 잘못 입력했습니다');
    }


} else {
    alert('아이디와 패스워드를 입력하세요')
    //id/pw 둘다입력 받지 못한 경우
}