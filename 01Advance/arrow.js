// const sayHello = function(name){
//     return `Hey there ${name}!`
    
// }

// console.log(sayHello('Sammy'));

const sayHello = (name) => `Hey there ${name}!`
    

// console.log(sayHello('Sammy'));


const todos = [{
    title: 'Buy Bread',
    isDone: true,
}, {
    title: 'Go to Gym',
    isDone: true,
}, {
    title: 'Record videos',
    isDone: false,
}]


const thingsDone = todos.filter((todo) => todo.isDone === true)



// console.log(thingsDone);

// never use arrow function in methods and constructor

