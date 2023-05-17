// li 항목 요소 가져오기
const items = document.querySelectorAll("li");
console.log(items);

for (item of items) { // for(let item=0; item<items.length; i++)
    item.addEventListener("click", function () {
        // 항목을 클릭했을때, 이벤트 리스너가 실행
        this.parentNode.removeChild(this);
        // 부모 노드를 찾아서 자식(나 = this)을 삭제

    });
}