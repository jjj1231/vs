/* 추가btn
1. 사용자 입력 값 화면에 출력
2. 로컬 스토리지에 사용자 입력값 저장

*사용자 입력값 완료/삭제 
완료 한번 눌렀을 때 중라인, 한번 더 눌렀을 때 다시 돌아옴 
삭제 눌렀을 때 전체 없어짐
완료 () > 1. 사용자 입력값 찾기 2. css style 적용(toggle)
삭제 () > 1. 삭제한 요소 찾기 2. 찾은 요소 DOM 문서에서 제거 3. 로컬스토리지에 저장된 해당 값 삭제
--

*새로 고침 
로컬 스토리지에 저장된 값이 있다면? 화면에 출력 


* div(부모) li, 완료, 삭제(자식)
*/


// 웹 요소 가져오기
const todoInput = document.querySelector('#todo_input');
const addButton = document.querySelector('#add_button');
const todoList = document.querySelector('#todo_list');

// 이벤트 처리
document.addEventListener("DOMContentLoaded", getLocal);

addButton.addEventListener('click', addTodo);
// 추가 버튼을 눌렀을때 addTodo라는 함수를 실행

todoList.addEventListener('click', manageTodo);

// 함수
function addTodo(e) {
    e.preventDefault();
    // 폼 안 버튼이여서 기본 동작 취소

    const newDiv = document.createElement('div');
    newDiv.classList.add('todo');
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo_content');
    newDiv.appendChild(newTodo);

    saveToLocal(todoInput.value);
    // li에도 출력, locol 스토리지에도 저장해야 하므로 만듬. 완료/삭제 후에 추가해도 상관 없음 위치는 상관없음

    // 버튼 만들어유 
    const completeButton = document.createElement('button');
    completeButton.innerText = '완료';
    completeButton.classList.add('complete_button');
    newDiv.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = '삭제';
    deleteButton.classList.add('delete_button');
    newDiv.appendChild(deleteButton);

    todoList.appendChild(newDiv);
    // 내가 만든 div를 todo_list에 넣어줌 > 화면에 보이게 

    todoInput.value = "";
}

function saveToLocal(todo) {
    //매개변수 todo로 받음

    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
        // 로컬스토리지에 값이 있는지 확인, 없다면 빈배열 만듬 []; 

    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
        // 값이 있다면 joson형태로 parse해서 바꾸고 todos에 저장 
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    // 새로운 값을 추가 할때
}

function getLocal() {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function (todo) {
        // 각각의 요소에 대해서 확인\
        // for(let todo=0; todo < todos.length; todo++)

        const newDiv = document.createElement('div');
        newDiv.classList.add('todo');
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        // 각각의 요소에 대해서 li텍스트에 넣어줘
        newTodo.classList.add('todo_content');
        newDiv.appendChild(newTodo);

        const completeButton = document.createElement('button');
        completeButton.innerText = '완료';
        completeButton.classList.add('complete_button');
        newDiv.appendChild(completeButton);

        const deleteButton = document.createElement('button');
        deleteButton.innerText = '삭제';
        deleteButton.classList.add('delete_button');
        newDiv.appendChild(deleteButton);

        todoList.appendChild(newDiv);

        todoInput.value = "";
    });
}

function manageTodo(e) {
    const whichButton = e.target.classList[0];
    // 이벤트가 일어난 target이 되는 class명을 찾음(classlist의 0번째)  
    if (whichButton === 'complete_button') {
        const todo = e.target.parentElement;
        todo.children[0].classList.toggle('completed');
        // todo에 지금 일어난 target의 div를 찾아서 todo에 저장 

    } else if (whichButton === 'delete_button') {
        //delete_button 의 클래스 요소가 담겨있다면, 
        const todo = e.target.parentElement;
        removeLocal(todo);
        // 함수의 인자 값으로 넘겨줌 
        todo.remove();
        // div자체를 지움 
    }
}

// 로컬 스토리지에 값을 지우는 함수 ▽
function removeLocal(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    const index = todos.indexOf(todo.children[0].innerText);
    // div의 첫번째 자식인 li를 가져옴 
    // 인덱스가 몇번인지 찾음, 내용 값이 일치하는 인덱스 번호를 찾음 
    // indexOf("1") 라는 값이 있으면 나에게 반환해줘
    // innerText = 값에 대한 내용 

    todos.splice(index, 1);
    // 몇번째를 기준으로 몇개 지울건지 물어봄

    localStorage.setItem('todos', JSON.stringify(todos));
}