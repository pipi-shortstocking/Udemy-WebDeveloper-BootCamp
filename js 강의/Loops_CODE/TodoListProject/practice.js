let input = prompt('what would you like to do?');
const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];

while (input !== 'quit') {
    if (input === 'new') {
        const newTodo = prompt('Ok, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`)
    } else if (input === 'list') {
        console.log('*****************')
        for(let i = 0;i<todos.length;i++){
            console.log(`${i}: ${todos[i]}`)
        }
        console.log('*****************')
    } else if (input === 'delete') {
        const index = parseInt(prompt('Ok, enter and index to delete:'));
        if(!Number.isNaN(index)){
            const delTodo = todos.splice(index,1);
            console.log(`Ok, deleted ${delTodo[0]}`)
        } else {
            console.log('Unknown index')
        }
    }
    input = prompt('what would you like to do?');
}
console.log('OK QUIT THE APP!')