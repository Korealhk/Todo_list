import React, { Component } from 'react';
import './App.css';
import TodoListTemplate from './Component/TodoListTemplate';

class App extends Component{
  render() {
    return(
      <div>
        <TodoListTemplate />
        <p> 아녕 </p>
      </div>
    );
  }
}
export default App;
