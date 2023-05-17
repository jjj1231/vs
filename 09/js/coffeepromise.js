// 프로미스 객체 선언
const order = new Promise((res, rej) => {
    // res - 성공했을 경우, rej - 실패했을 경우 

    let coffee = prompt('어떤 커피를 주문하시겠습니까?', '아메리카노');
    if (coffee !== null && coffee !== "") {
        document.querySelector('.start').innerHTML = `${coffee} 주문 접수`;
        // 3초 후에 res()함수를 호출
        setTimeout(() => {
            res(coffee);
        }, 3000)
    } else {
        //[취소] 버튼을 클릭했거나, 아무 값도 적지 않고 확인을 눌렀을 때 
        rej('커피를 주문하지 않았습니다.');
    }

});

// 프로미스 객체 이용하여 then(), catch() 매서드 이용하여 프로미스 소비 
order.then(display).catch(showErr);

// display, showErr 함수를 구현
function display(result) { // 성공했을 경우, 프로미스 결과값을 인자로 받음
    document.querySelector(".end").innerText = `${result} 준비 완료`;
    document.querySelector(".end").classList.add('active');
    document.querySelector(".start").classList.add('done');
}

function showErr(err) { // 실패했을 경우, 프로미스 결과값을 인자로 받음
    document.querySelector('.start').innerText = err;
}