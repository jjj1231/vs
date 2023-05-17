//모든 삭제 버튼 가져오기
const buttons = document.querySelectorAll("p> span");
console.log(buttons);

for (button of buttons) {
    // for(let button=0; button<buttons.legth; button++)

    // span 항목을 클릭했을 때, 부모 노드 기준으로 자기 자신이 삭제되었으면 좋겠다.
    button.addEventListener("click", function () {
        this.parentNode.remove(this); //x랑 글자 둘다 지워줌(자기 자신을 기준으로 부모도 지워줌)

        // this.remove(); //x만 지워짐(자기자신만 지움)
        // // this.parentNode.removeChild(this); //x만 지워짐
    });
}