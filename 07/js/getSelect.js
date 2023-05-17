// 선택 목록(select)에 접근하기
const major = document.querySelector("#major");

// 선택 목록 항목(option)에 접근하기
const major_opt = major.options;
console.log(major_opt);

function displaySelect() {
    // 선택 목록에 옵션 항목(select(요소).selectedIndex)의 text만 가지고 오겠다.
    let selectedText = major.options[major.selectedIndex].innerText;
    console.log(selectedText);
    // 선택한 항목을 알림창으로 띄어주기
    alert(`[${selectedText}]를 선택했습니다`);
}

// 선택 목록에 함수를 연결할 때는 onclick이 아닌 onchange를 사용해야 한다.
// change
major.onchange = displaySelect;