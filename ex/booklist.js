// '제목' 정보를 가져옴
const title = document.querySelector('#title');

// '저자' 정보
const author = document.querySelector('#author');

// '저장하기'버튼
const save = document.querySelector('#save');

// 정보가 표시될 영역 
const booklist = document.querySelector('#booklist');



// 저장하기 버튼이 클릭됐을 때, 제목-저자 정보를 목록에 추가 
// 이벤트 명 click, 제목- 저자 값 .vlaue, Element create 내용 추가

save.addEventListener('click', (e) => {
    // 버튼에 대한 기본 동작 취소
    e.preventDefault();

    // 제목 - 저자 정보를 booklist라는 목록에 추가
    const item = document.createElement('li');
    item.innerHTML = `
    ${title.value} - ${author.value}
    <span class="delButton">삭제</span>`;

    booklist.appendChild(item);

    //값 초기화
    title.value = "";
    author.value = "";

    //-----------------------------------------------------------


    // ---------목록에서 제거하기 -----------
    /* querySelectorAll()를 사용하여 클래스 이름이 delButton인 모든 요소를
delButtons 노드리스트에 할당 */

    // li태그가 생길 때 마다 delbuttons안에 넣어 줘
    const delButtons = document.querySelectorAll('.delButton'
    );

    // for 루프를 사용하여 delButtons 배열의 모든 요소에 대해 이벤트 리스너를 등록
    for (let delButton of delButtons) {
        // for(let delButton=0; delButton < delButtons.length; delButton ++;)

        // delButton = 각 요소(span)
        delButton.addEventListener('click', removeItem);

    }
});

// 목록 요소 지우기 (함수 정의)
function removeItem() {
    // parentNode 속성을 사용하여 "삭제" 버튼 요소의 부모 요소인 li를 찾아 list 변수에 할당
    let list = this.parentNode;
    // list 아이템의 부모 요소를 찾아 부모와 자식을 함께 삭제 
    list.parentNode.removeChild(list);
}

