const todos = [{
    title: 'Buy Bread',
    isDone:true,
}, {
    title: 'Go to Gym',
    isDone: false,
}, {
    title: 'Record videos',
    isDone: false,
}, {
    title: 'Code',
    isDone: true,
}, {
    title: 'Play FIFA',
    isDone: true,
}, {
    title: 'Client meeting',
    isDone: false,
}]

const thingsNotDone = todos.filter((todo) => todo.isDone === false)

thingsNotDone.forEach((todo) => console.log(todo.title))


