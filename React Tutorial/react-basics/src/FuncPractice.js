import React from 'react'

// function formatName(user){
//   return user.firstName + " " + user.lastName;
// }

// const user = {
//   firstName: 'April',
//   lastName: 'Craig'
// }

// const element = (
//   <h1>Hello, {formatName(user)}</h1>
// )

// function getGreeting(user) {
//   if (user) {
//     return <h1>Hello, {formatName(user)}</h1>
//   }
//   return <h1>Hello, stranger</h1>
// }

//element has attributes aka props
// const element = <div tabIndex='0'></div>
// console.log(element.props)

// You may also use curly braces to embed a JavaScript expression in an attribute:
// const element = <img src={user.avatarUrl}></img>;


let element = React.createElement(
  'h2',
  {className: 'greeting'},
  'Hey peeps'
)
console.log(element)

let element2 = element.props.children
console.log(element2)
function FuncPractice() {
  return (
    <div>
      {/* {element} */}
      {/* {getGreeting()} */}
      {element}
      {element2}
    </div>
  )
}

export default FuncPractice
