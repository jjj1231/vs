// 1. 주문 정보 영역
const orderInfo = document.querySelector('#orderInfo');
// 2. 주문하기 벝튼
const orderButton = document.querySelector('#order');
// 3. 책 제목 요소
const title = document.querySelector('#container > h2');

console.log(orderInfo);
console.log(orderButton);
console.log(title);

orderButton.addEventListener("click", //버튼을 클릭했을 때, 이벤트 리스너를 생성
    () => { //클릭했을 때 함수 실행
        let newP = document.createElement("p") // 새로운 p요소를 생성하겠다.
        let textNode = document.createTextNode(title.innerTEXT);
        // title의 텍스트 부분만 가져와서 텍스트 노드로 생성하겠다.

        // 텍스트 노드를 새로운 부모(p) 요소에 추가
        newP.appendChild(textNode);
        orderInfo.appendChild(newP);
    },
    { once: true } // click 이벤트가 여러 번 
);

title.addEventListener("click", () => {
    title.remove();

})