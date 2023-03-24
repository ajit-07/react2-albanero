//1st Step=>Import the react and reactDom libraries

/*import React from 'react';
import ReactDOM from 'react-dom/client';

//2nd Step=>Get a reference to the div with root Id

const el=document.getElementById('root')

//3rd Step=>Tell react to take control of that element

const root=ReactDOM.createRoot(el)

//4th Step=>Create a component(A function that returns some JSX) to render 

/*function App(){
  let message='Hello there' //Objects,arrays,null,undefined will not be printed
  if(Math.random()>0.5) message='Bye dear!!'
return <h1>{message}</h1>
}*/
//5th step=>Show the component on the screen
/*function App(){
  //let date=new Date()
  //let time=date.toLocaleTimeString()
  //return <h1>{time}</h1>
  return <h1>{new Date().toLocaleTimeString()}</h1> //Shorthand expression of the above JSX
}

root.render(<App/>)*/
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import NameList from './ListRendering'
import PersonList from './person'

const el = document.getElementById('root')
const root = ReactDOM.createRoot(el)
root.render(
  <>
  <App />
  <NameList />
  <PersonList />
  </>
)


















