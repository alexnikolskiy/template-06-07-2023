const container = document.querySelector('.todos__list')
const template = document.querySelector('#todo-item-template').content

const renderTodo = (todoName) => {
  const li = template.querySelector('.todo-item').cloneNode(true)
  const span = li.querySelector('.todo-item__text')
  span.textContent = todoName

  li.querySelector('.todo-item__copy').addEventListener('click', () => {
    renderTodo(todoName)
  })
  li.querySelector('.todo-item__del').addEventListener('click', () => {
    li.remove()
  })
  const editTodo = (ev) => {
    ev.preventDefault()
    span.contentEditable = false
  }
  li.querySelector('.todo-item__edit').addEventListener('click', () => {
    span.contentEditable = true
    span.focus()
  })
  span.addEventListener('blur', editTodo)

  container.append(li)
}

todos.forEach((todoName) => {
  renderTodo(todoName)
})
