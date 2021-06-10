import React from "react";
import {Task} from "./Task.js"
import {AddTask} from "./TaskAdd.js"

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

export class MyTodoList extends React.Component {
    state = {
      tasks: arr
    }

    changeStatus = (id) => {
        let ind = this.state.tasks.findIndex(it => it.id === id)
        let newTasks = [...this.state.tasks]
        newTasks[ind].completed = !newTasks[ind].completed
        this.setState({"tasks": newTasks})
    }
  
      pushTask = (newTask) => {
          newTask["id"] = this.state.tasks.length + 1
          newTask["completed"] = false
        this.setState(currentState =>
          ({
            tasks: [...currentState.tasks, newTask]
          })
      )
      }
        render = () => (
      <div>
      <div>
        {this.state.tasks.map(it => <Task{...it} onChangeStatus={this.changeStatus} />)}
      </div>
      <div> <AddTask onAddTask={this.pushTask} /> </div>
      </div>
    )
        }

export default MyTodoList