let userNum = prompt('숫자를 입력하세요.');

// 조건문

if (userNum !== null) { //사용자의 값이 있는 경우
    if (userNum % 3 === 0) {
        // 3으로 나눈 나머지 몫이 0이라면
        alert('3의 배수입니다.'); //해당 실행문을 실행

    }
    else {
        //3으로 나눈 나머지 몫이 0이 아니라면
        alert('3의 배수가 아닙니다.') // 해당 실행문을 실행
    }
}
else { //사용자의 값이 없는 경우 (null인 경우)
    alert('입력이 취소되었습니다.');
}




// // 프롬프트 창에서 [취소] 버튼을 클릭했는지 체크하기
// let userName = prompt('이름을 입력해 주세요.');

// // if (userName === null) { //null인 경우
// //     console.log(userName);
// //     alert('취소를 눌렀습니다.');
// // }
// // else {
// //     alert('userName');
// //     // }

// if (userName !== null) { //null이 아닌 경우
//     console.log(userName);
//     alert(userName);
// }

// else {
//     alert('userName');
// }