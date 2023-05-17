// let score = prompt('점수를 입력해주세요.');

// if (score !== null) {
//     if (score >= 90) {
//         alert('A학점');
//     }

//     if (score >= 80) {
//         alert('B학점');
//     }

//     if (score >= 70) {
//         alert('C학점');
//     }

//     if (score <= 69) {
//         alert('D학점');
//     }

//     else {
//         alert('올바른 점수를 입력하세요');
//     }
// }


let score = prompt('점수를 입력해 주세요.');
if (score !== null) {
    //사용자에게 입력값을 받은 경우
    if (parseInt(score) >= 90) {
        alert('A학점');
    }
    else if (parseInt(score) >= 80) {
        alert('B학점');
    }

    else if (parseInt(score) >= 70) {
        alert('C학점');
    }

    else {
        alert('D학점');
    }
}
else {
    //사용자에게 입력값을 받지 못한 경우(null)
    alert('올바른 점수를 입력하세요.');
}