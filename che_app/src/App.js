import logo from './logo.svg';
import './App.css';
import React from "react";
import './styles.css'

const arr = [
  {
    id: 1, 
    name: 'name1', 
    description: 'do smth', 
    completed: true
  },
  {
    id: 2, 
    name: 'name2', 
    description: 'do smth', 
    completed: false
  },
  {
    id: 3, 
    name: 'name3', 
    description: 'do smth', 
    completed: false
  },

  {
    id: 4, 
    name: 'name4', 
    description: 'do smth', 
    completed: true
  },
  {
    id: 5, 
    name: 'name5', 
    description: 'do smth', 
    completed: false
  },
  {
    id: 6, 
    name: 'name6', 
    description: 'do smth', 
    completed: true
  },
  {
    id: 7, 
    name: 'name7', 
    description: 'do smth', 
    completed: true
  }

]


class Task extends React.Component {
  render = () => {
    return (
      <div key={this.props.id} class="Tasks">
        <div class="ID"> {this.props.id}</div> 
        <div class="name"><h1>{this.props.name}</h1></div> 
        <div class="description">{this.props.description}</div>
        <button onClick={this.onStatusClick}>Статус</button>
      </div>
  )}

  onStatusClick = () => {
    console.log(`Task ${this.props.id} completed status = ${this.props.completed}`)
  }
}

class MyTodoList extends React.Component {
  state = {
    tasks: arr
  }

  render = () => (
    <div>{this.state.tasks.map(it => new Task(it).render())}</div>
  )
}

const App = () => {
  return <MyTodoList />
}
export default App;
