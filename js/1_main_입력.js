const form = document.querySelector('form');


//item엘리먼트 만들어주는 함수선언
const createItem = (listId,aa) => {
  const list = document.querySelector(`#${listId}`);
  const item = document.createElement('div'); 
  
  item.id = aa.id; //받아온 id를 새로 만든 div의 id
  item.innerText = aa.text;
  item.classList.add('item');
  //console.log(list);

  list.appendChild(item);

}

//입력값을 받아오고, 아이디 만들고, 새로운 아이템 만들어주는 함수
const createTodo = (e) => {
  e.preventDefault();  //자동으로 새로고침되는 효과를 막아줌

  const input = document.querySelector('input');
  const id = uuidv4();  //uuid라이브러리를 연결해서 아이디 생성

  const newTodo = {
    id,
    text :input.value,
  }  
  //console.log(newTodo.id, newTodo.text)

  createItem('todo', newTodo)  //item만드는 함수 실행, 들어갈list의 아이디todo/newTodo를 인자로 남겨줌
  input.value= '';  
}

form. addEventListener('submit',createTodo)