//try ... catch


try {
    console.log("시작");
    add; //선언하지 않은 함수
    console.log("실행 중");
} catch (err) {
    // try 실행 문에서 에러 발생 시, 에러 관련된 정보를 담고 있는 객체를 인자로 활용


    console.log(err);
    // 일반적인 메시지 출력
    console.error(err.name);
    // 오류 메시지로 출력
}

// throw문 - 사용자가 직접 예외 메시지 설정
let json = '{"grade": 3, "age" : 25}';

try {
    let user = JSON.parse(json);
    if (!user.name) {
        throw new Error("사용자 이름이 없습니다.");
    }
} catch (err) {
    console.error(err);
}