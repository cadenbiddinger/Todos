console.log("loaded");

let state = {
  orignalTodos: [],
  toDo: [],
  titlesort: false,
}
// {userId: 1, id: 4, title: "et porro tempora", completed: true}
function renderToDo(user) {
  return `<div class='user-card'>
            <h3>${user.title} <span data-id='${user.id}' onclick='remove(this)'>remove</span></h3>
            <div class='user-info'>
              <p>completed: ${user.toDo_completed}</p>
            </div>
          </div>`;
}

function remove(element) {
  const idOfUserToRemove = element.dataset.id;
  const { toDo } = state;
  state.toDo = toDo.filter((user) => user.id !== idOfUserToRemove)
  //render();
}

function renderToDos() {
  if (toDo.length === 0) {
    return `<div>Nothing To Do</div>`;
  } else {
    return toDo.reduce((userStr, user) => {
      return userStr + rendertoDos(user)
    }, "")
  }
}

function filterComplete() {
  console.log("clicked");
  const { toDo } = state;
  const toDoComplete= toDo.map(item => item === true)
  state.toDo = toDoComplete
  renderToDo();
}

function reset() {
  const { orignalTodos } = state;
  state.toDo = [...orignalTodos];
  render();
}

function sortByTitle() {
  const { }
}




function getToDo() {
  get("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    state.toDo = response.data.data;
    state.toDo = response.data.data;
    console.log(response.data.data);
    render();
  })
}
