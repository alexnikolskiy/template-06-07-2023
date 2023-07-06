const container = document.querySelector('.todos__list')

const renderTodo = (todoName) => {
  const template = `
    <li class="todo-item">
      <span class="todo-item__text">${todoName}</span>
      <button class="todo-item__edit"></button>
      <button class="todo-item__copy"></button>
      <button class="todo-item__del"></button>
    </li>
  `

  container.insertAdjacentHTML('beforeend', template)
}

todos.forEach((todoName) => {
  renderTodo(todoName)
})

const form = document.querySelector('.todo-form')
const input = document.querySelector('.todo-form__input')

form.addEventListener('submit', (ev) => {
  ev.preventDefault()
  renderTodo(input.value)
})
