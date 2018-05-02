// const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat']

// console.log(days[0]);

// // days.forEach(function (day, index){
// //     console.log(`Starts with ${index+1} -- ${day}`);
    
// // })

// for(let i=days.length-1; i>=0; i--){
//     console.log(`Starts with ${i+1} -- ${days[i]}`);
    
// }

const myTodos = []
myTodos.unshift('Buy Bread')
myTodos.unshift('Go tot gym')
myTodos.unshift('Code')

for(let i=0; i<myTodos.length; i++){
    console.log(`Your task no. ${i+1} is: ${myTodos[i]}`);

}

// myTodos.forEach(function(todo, index){
//     console.log(`Your task no. ${index+1} is: ${todo}`);
    
// })