const todoInput = document.querySelector("#todo_input"); // 사용자 입력
const addButton = document.querySelector("#add_button"); // 추가 버튼
const todoList = document.querySelector("#todo_list"); // ul 요소

// 이벤트 처리 
addButton.addEventListener('click', addTodo);
document.addEventListener('DOMContentLoaded', getLocal);
todoList.addEventListener('click', manageTodo);



// 함수 

// [추가] 버튼을 클릭했을 때, #todo_list 부분에 입력한 내용이 목록으로 화면에 추가 될 수 있는 이벤트 핸들러 구현 
function addTodo(e) {
    // 버튼의 기본 이벤트 해제
    e.preventDefault();

    // 새로운 목록이 될 노드 요소들 추가 
    // 1. 전체를 감싸는 div
    const newDiv = document.createElement("div")
    newDiv.classList.add("todo"); // div 요소에 class 값 "todo" 적용

    // 2. 사용자 입력값을 나타낼 목록 li 
    const newTodo = document.createElement("li");
    // 사용자 입력 값을 받아와 li 요소에 추가
    newTodo.innerText = todoInput.value;
    // 사용자 입력값이 li 요소에 추가되는지 콘솔로 확인
    console.log(newTodo);
    // li 요소에 class 값 "todo_content" 적용
    newTodo.classList.add("todo_content");
    // li 요소를 부모 요소인 newDiv에 추가 
    newDiv.appendChild(newTodo);

    // 3. 완료 btn 4. 삭제 btn
    const completeButton = document.createElement("button"); // 완료btn
    const deleteButton = document.createElement("button"); // 삭제btn

    // 버튼에 [완료 | 삭제] 라는 텍스트 추가
    completeButton.innerText = '완료';
    deleteButton.innerText = '삭제';

    // 버튼 요소에 class 적용
    completeButton.classList.add("complete_button")
    deleteButton.classList.add("delete_button")

    // 버튼 요소를 부모 요소인 newDiv에 추가
    newDiv.appendChild(completeButton);
    newDiv.appendChild(deleteButton);
    console.log(newDiv);

    todoList.appendChild(newDiv);

    // 로컬 스토리지에 저장할 함수를 따로 구현
    // 사용자 입력값을 saveToLocal이라는 함수의 인자로 넘겨준다
    saveToLocal(todoInput.value);

    // 사용자 입력창 초기화
    todoInput.value = "";

}

function saveToLocal(todo) {
    // 로컬 스토리지의 값을 저장할 변수 선언
    let todos;

    // 로컬 스토리지에 값이 있는지 키를 이용해 확인
    // a. 만약에 값이 없는 경우라면? > 빈 배열 생성
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    // b. 만약에 값이 있는 경우라면? > 해당하는 값을 객체 타입으로 변환하여 todos(선언한 변수)에 저장 
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    // 입력한 내용을 인자로 받아와 배열의 마지막 값으로 추가 
    todos.push(todo);

    // 변경된 값을 로컬 스토리지에 저장
    // 객체 > JSON 변환 (JSON.stringify)
    localStorage.setItem("todos", JSON.stringify(todos));
    // todos를 JSON 형태로 변환하여 키 이름은 todos, 값은 todos 배열의 값으로 저장
}

// 새로고침 할때도 입력 값이 보이게
function getLocal() {
    // 로컬 스토리지의 값을 저장할 변수 선언
    let todos;

    // 로컬 스토리지에 값이 있는지 키를 이용해 확인
    // a. 만약에 값이 없는 경우라면? > 빈 배열 생성
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    // b. 만약에 값이 있는 경우라면? > 해당하는 값을 객체 타입으로 변환하여 todos(선언한 변수)에 저장 
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    // 로컬 스토리지 내용이 저장된 배열의 각 요소에 접근하여 화면에 표시 
    todos.forEach(function (todo) {
        // 
        // 새로운 목록이 될 노드 요소들 추가 
        // 1. 전체를 감싸는 div
        const newDiv = document.createElement("div")
        newDiv.classList.add("todo"); // div 요소에 class 값 "todo" 적용

        // 2. 사용자 입력값을 나타낼 목록 li 
        const newTodo = document.createElement("li");
        // 사용자 입력 값을 받아와 li 요소에 추가
        newTodo.innerText = todo;
        newTodo.classList.add("todo_content");
        // li 요소를 부모 요소인 newDiv에 추가 
        newDiv.appendChild(newTodo);

        // 3. 완료 btn 4. 삭제 btn
        const completeButton = document.createElement("button"); // 완료btn
        const deleteButton = document.createElement("button"); // 삭제btn

        // 버튼에 [완료 | 삭제] 라는 텍스트 추가
        completeButton.innerText = '완료';
        deleteButton.innerText = '삭제';

        // 버튼 요소에 class 적용
        completeButton.classList.add("complete_button")
        deleteButton.classList.add("delete_button")

        // 버튼 요소를 부모 요소인 newDiv에 추가
        newDiv.appendChild(completeButton);
        newDiv.appendChild(deleteButton);
        console.log(newDiv);

        todoList.appendChild(newDiv);

    });

}

// 버튼을 눌렀을 때 각각에 맞게 동작하는 함수 구현
function manageTodo(e) {
    // 각 버튼의 클래스 이름을 가지고 와 변수에 저장 - 현재 클릭한 요소가 무엇인지 알기 위해서

    const whichButton = e.target.classList[0];
    console.log(whichButton);

    // 버튼 기능 구현 
    // a. 만약 [완료] 버튼이라면 ?  내용 부분에 클래스 .completed 추가 
    // 즉, 스타일을 적용하겠다는 것 - 버튼을 누를 때마다 class add, remove (toggle)

    if (whichButton === "complete_button") {
        const todo = e.target.parentElement;
        console.log(todo);
        todo.children[0].classList.toggle("completed")

    }
    // b. 만약 [삭제] 버튼이라면 ? 
    // b-1 해당 내용이 화면에서 지워질 수 있도록 구현 
    // b-2 해당 내용이 로컬 스토리지에서 지워질 수 있도록 구현 
    else if (whichButton === "delete_button") {
        const todo = e.target.parentElement;
        todo.remove(); // 요소 지우기
        removeLocal(todo); // 로컬 스토리지에 해당 값 지우기

    }

}


function removeLocal(todo) {
    // 로컬 스토리지 값 확인 
    // 값을 저장할 변수를 하나 선언 

    let todos;
    // 값 확인 조건

    if (localStorage.getItem("todos") === null) {
        todos = [];

    } else {
        // 값이 있는 경우 변수에 JSON을 객체 형태로 변환 후 저장
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    // 가지고 온 값이 몇 변째 인덱스인지 알아낸 후 해당 인덱스만 삭제
    // indexOf() - () 내용과 일치하는 요소를 찾아서 인덱스 값을 변호나 
    const idxNum = todos.indexOf(todo.children[0].innerText);
    // todos 배열에서 특정 todo 요소의 첫 번째 자식(li) 요소 내용과 일치하는 요소를 찾아 해당하는 요소가 있다면 인덱스 번호를 반환

    todos.splice(idxNum, 1);
    // idxNum 번째부터 1개를 삭제하겠다.

    // 삭제된 후의 내용을 로컬 스토리지에 다시 저장
    // 변경된 todos 값을 로컬 스토리지에 저장
    localStorage.setItem("todos", JSON.stringify(todos));

}


