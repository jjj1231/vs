const raffle = document.querySelector("#raffle"); //ID가 raffle인 요소 선택

console.log(raffle);

raffle.addEventListener("click", (e) => { //e : 매개변수, 아무거나 지정 가능
    //raffle이 있을 때 이벤트 사용
    e.preventDefault(); //기본 이벤트 처리 방지

    const seed = document.querySelector("#seed");
    const total = document.querySelector("#total");
    const result = document.querySelector("#result");
    let winner = ''; //당첨자 저장 변수 초기화 

    for (let i = 0; i < total.value; i++) {
        //총 추첨 횟수 만큼 반복문 실행
        //1부터 랜덤으로 숫자를 추출
        let picked = Math.floor((Math.random() * seed.value) + 1);
        winner += `${picked}번 `;
    }

    result.innerText = `당첨자 : ${winner}`
    result.classList.add("show");
    // result 요소에 show라는 class를 추가
});

let check = confirm('게시글을 삭제하시겠습니까?');
if (check === false) {
    alert('삭제를 취소하셨습니다.');

} else {
    alert('게시글이 삭제되었습니다.');
}