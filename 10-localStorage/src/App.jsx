import React from 'react'

const App = () => {

  localStorage.setItem('name', 'John Doe') // creates a new item in localStorage with key 'name' and value 'John Doe'

  const name = localStorage.getItem('name') // retrieves the value associated with the key 'name' from localStorage and assigns it to the variable 'name'

  console.log(name) // Output: John Doe

  // localStorage.removeItem('name') // Removes the item with key 'name' from localStorage

  const user = {
    name: 'Jane Doe',
    age: 30,
    email: 'janedoe@gmail.com'
  }

  localStorage.setItem('user', JSON.stringify(user)) // Converts the user object to a JSON string and stores it in localStorage with the key 'user'

  const storedUser = localStorage.getItem('user') // Retrieves the JSON string associated with the key 'user' from localStorage and assigns it to the variable 'storedUser'

  const parsedUser = JSON.parse(storedUser) // Parses the JSON string back into a JavaScript object and assigns it to the variable 'parsedUser'

  console.log(parsedUser) // Output: { name: 'Jane Doe', age: 30, email: '

  // localStorage.clear() // Clears all items from localStorage

  return (
    <div>App</div>
  )
}

export default App