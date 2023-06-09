const form = document.querySelector('form');
const boxes = document.querySelectorAll('.list');

//출발, 이동(도착)시점 .list 의 id이름
let from;
let to;

let todoList =[];
let doingList =[];
let doneList =[];

let lists = { 
  todo : todoList,
  doing : doingList,
  done : doneList
}

//.list가 (item이)드래그되는걸 인식할때 발생하는 함수
const dragOver = (e) => {  
  e.preventDefault();   //자연스럽게 움직이게(금지표시가 아니라 +표시 생기게)
  //console.log('반응하는 list의 id는? ', e.target.id)
  const { id : targetId } = e.target;   //마우스가 지나가는 곳의 아이디
  const listIds = Object.keys(lists); //오브젝트의 키값만 
  
  if(listIds.includes(targetId)){ //마우스가 지나가는 곳 id가 셋중 하나와 같을때만 
    to = targetId // 도착(이동)지점을 의미하는 to에 아이디를 넣는다
  }
}

const dragStart = (e) => {  
  from = e.target.parentElement.id; //드래그 시작하는 지점 .list의 id
  console.log(from)
}
const dragEnd = (e) => {
  //console.log('드래그 끝 dragEnd함수 발생!')
  if(from === to) {   //같은 list내부에서 움직였을때는 삭제X
    return; 
  }
  e.target.remove();    //출발점 list에서는 지워줌
  
  const { id } = e.target;

  lists[from] = lists[from].filter((item) => {
    if(item.id !== id){
      return item
    } else { createItem(to,item) }
  })

  console.log(from, lists[from])
  console.log(to, lists[to])

}

//item엘리먼트 만들어주는 함수선언
const createItem = (listId,aa) => {
  const list = document.querySelector(`#${listId}`);
  const item = document.createElement('div'); 
  
  item.id = aa.id; //받아온 id를 새로 만든 div의 id
  item.innerText = aa.text;
  item.classList.add('item');
  item.draggable = 'true';  //드래그할 수 있는 기능
  //console.log(list);

  item.addEventListener('dragstart',dragStart); //드래그 시작했을때 발생하는 함수
  item.addEventListener('dragend',dragEnd); //드래그 끝냈을때 발생하는 함수

  list.appendChild(item);  
  lists[listId].push(aa);  //아이템 생성후 마지막으로 배열에 넣어준다
  
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

form.addEventListener('submit',createTodo)

boxes.forEach((box) =>{
  box.addEventListener('dragover',dragOver)
})
