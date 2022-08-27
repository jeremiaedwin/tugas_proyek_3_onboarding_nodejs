const name = 'Andrew'
const userAge = 27

const user = {
    name: name,
    age: userAge,
    location: 'Philadelphia'
}

console.log(user)

const { age, location:address } = user
console.log(age)
console.log(address)

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('order', product)