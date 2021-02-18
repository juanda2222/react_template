import React from 'react';
import logo from './logo.svg';
import './App.css';


// import redux related
import { connect } from 'react-redux'
import { appState,  } from "./redux/reducers"
import { add_todo_to_list_sagas } from "./redux/actions"

// assets
import checked from "./assets/checked.png"
import unchecked from "./assets/unchecked.png"

interface AppProps {
  todoList: {
    text: string,
    id: string,
    checked: boolean
  }[],
  saveTodo( arg:{todoContent: string}):void
}

function App(props:AppProps) {
  const { todoList,saveTodo  } = props

  const todoListElement = todoList.map((todo) => {
    return (
    <div key={todo.id} style={{display: "flex"}}>
      <p>
        {todo.text}
      </p>
      {
        todo.checked ? (
          <img style={{maxWidth:"20px", height: "auto"}} src={checked} alt="checked"/>
        ) : (
          <img style={{maxWidth:"20px", height: "auto"}} src={unchecked} alt="unchecked"/>
        )
      }
      </div>
    )
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. TEST 1
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        { todoListElement }
        <button onClick={() => { saveTodo({todoContent:"new Todo"}) }}>press me to see the data</button>
      </header>
    </div>
  );
}



const mapStateToProps = (state: appState, /*ownProps:ownPropsType*/) => {
  return {
    todoList: state.todoDataReducer.todoList
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    // explicitly forwarding arguments
     saveTodo: (todoObject: {todoContent: string}) => dispatch(add_todo_to_list_sagas(todoObject))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

