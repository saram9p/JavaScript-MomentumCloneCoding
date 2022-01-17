const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // toDos를 string으로 바꾼다.
}

    function deleteToDo(event){
        const li = event.target.parentElement; // 클릭된 버튼의 부모
        li.remove(); // li 삭제하기
        toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); // 클릭했던 li의 id를 갖고 있는 toDo 지우기
        saveToDos();
    }

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText= "❌"; // 이모지 단축키 window + . (숫자패드 . 가 아님)
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); // span을 li의 맨 뒤에 추가한다.
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; // input의 값을 newTodo라는 변수에 복사
    toDoInput.value = ""; // input의 값 초기화
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);  // array에 newTodoObj 넣기
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; // toDos 에 parsedToDos 값 저장
    parsedToDos.forEach(paintToDo);
}

function goodFilter(){

}

[1, 2, 3, 4].filter(goodFilter)