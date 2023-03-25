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
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import NameList from './ListRendering'
import PersonList from './person'
import Frag from './fragment'
import Table from './tables'
import Todo from './Todo'
import HookCounter from './hookCounter1'
import HookMouse from './HookMouse'
import MouseContainer from './mouseContainer'
import IntervalHookCounter from './intervalhookcounter'
import DataFetch from './useEffectFetchdata'
import Component1 from './comp1'

const el = document.getElementById('root')
const root = ReactDOM.createRoot(el)
export const userContext = React.createContext()
export const learnContext = React.createContext()
root.render(
  <>
    {/*<App />
  <NameList />
  <PersonList />
*/} {/*
    <Frag />
    <Table />
<Todo />*/}
    {/*<HookCounter />*/}
    {/*<HookMouse />*/}
    {/*<MouseContainer />*/}
    {/*<IntervalHookCounter />*/}
    {/*<DataFetch />*/}
    <userContext.Provider value={'Ajit'}>
      <learnContext.Provider value={'Learning React'}>
        <Component1 />
      </learnContext.Provider>
    </userContext.Provider>
  </>
)
//stEP1 TO CREATE CONTEXT  USING CREATECONTEXT MEHTOD.2)provide a value to the context and and provider must wrap child
//component to made the value availavble
//3.consume the context value and export it first then import it.


















