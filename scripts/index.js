const container = document.querySelector('.todos__list')

const renderTodo = (todoName) => {
  const li = document.createElement('li')
  li.classList.add('todo-item')

  const span = document.createElement('span')
  span.classList.add('todo-item__text')
  span.textContent = todoName

  const buttonEdit = document.createElement('button')
  buttonEdit.classList.add('todo-item__edit')

  const buttonCopy = document.createElement('button')
  buttonCopy.classList.add('todo-item__copy')

  const buttonDel = document.createElement('button')
  buttonDel.classList.add('todo-item__del')

  li.append(span, buttonEdit, buttonCopy, buttonDel)

  return li
}

// todos.forEach((todoName) => {
//   container.append(renderTodo(todoName))
// })

// const fragment = document.createDocumentFragment()
// todos.forEach((todoName) => {
//   fragment.append(renderTodo(todoName))
// })
// container.append(fragment)

container.append(...todos.map((todoName) => renderTodo(todoName)))
