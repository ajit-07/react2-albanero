import React from "react"
//Conditional rendering
//If/else,element variables,Ternary conditional operator,short-circuit operatort
//1.)If else rendering
/*function App() {
    let isLoggedIn = true
    if (isLoggedIn) {
        return <h1>Welcome User</h1>
    } else {
        return <h1>Welcome Guest</h1>
    }
}*/
//2.)//element varibale method
/*function App() {
    let isLoggedIn = false, message
    if (isLoggedIn) {
        message = <h1>Welcome User</h1>
    } else {
        message = <h1>Welcome Guest</h1>
    }
    return (<div>{message}</div>)
}*/
//3.)using ternary opertor
/*function App() {
    let isLoggedIn=false
    return isLoggedIn ? (
        <h1>Welcome User</h1>
    ) : (
        <h1>Welcome Guest</h1>
    )
}*/
//4.)short-circuiting
//If we need to render only if condition then this is the best method.
function App() {
    let isLoggedIn=true
    return isLoggedIn && <h1>Welcome user</h1>
}



export default App