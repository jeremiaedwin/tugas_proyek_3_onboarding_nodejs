const todos = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
}

const read = (type, {title, completed}) => {
    console.log(type, title, completed)
}

read('read', todos)