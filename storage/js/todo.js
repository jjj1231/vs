// 입력 값 가져옴

const todo_input = document.querySelector('#todo_input')

// 추가 버튼 
const add_button = document.querySelector('#add_button')

// 정보가 표시될 영역
const todo_list = document.querySelector('#todo_list')

// 완료 버튼
const complete_btn = document.querySelector('button')

// 삭제 버튼 
const delete_btn = document.querySelector('button')

add_button.addEventListener('click', (e) => {
    e.preventDefault();

    const item = document.createElement('li');
    item.innerHTML = `
    ${todo_input.value}`;

    const complete_btn = document.createElement('button');
    complete_btn.textContent = '완료'

    const delete_btn = document.createElement('button');
    delete_btn.textContent = '삭제'

    complete_btn.addEventListener('click', () => {
        complete_btn.classList.toggle('.completed')
    })

    delete_btn.addEventListener('click', (e) => {
        e.currentTarget.parentNode.parentNode.removeChild(e.currentTarget.parentNode)
    })


    item.appendChild(complete_btn)
    item.appendChild(delete_btn)
    todo_list.appendChild(item)
    todo_input.value = "";


    localStorage.setItem("todo_input", JSON.stringify(todo_input));
    let localData;
    if (localStorage.getItem(todo_input) === null) {
        localData = [];
    } else {
        localData = JSON.parse(localStorage.getItem(todo_input));
    }

    console.log(localData);

    localStorage.setItem("todo_input", JSOn.stringify(localData));
});

