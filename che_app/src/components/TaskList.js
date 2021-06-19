import React from "react";
import {Task} from "./Task.js"
import {AddTask} from "./TaskAdd.js"
import normalizeState from "../data/normalize";
import projects from "../data/data";
import {Link} from "react-router-dom"


export class MyTodoList extends React.Component {
  
  constructor(props) {
    super(props);
    console.log(props)
    const tmp = normalizeState(projects)
    if (tmp.projectsById[this.props.match.params.id] == undefined) {
        window.location.href = '/error'
    }
    this.projectId = this.props.match.params.id
    this.data = normalizeState(projects)
    this.tasks = this.data.projectsById[this.projectId].tasksIds[0]
    this.state = { tasks: Object.entries(this.data.tasksById).map((key, value) => {
            if (this.tasks.includes(Number(key[0]))) {
                return key[1]
            }
        }).filter(it => it != undefined)}
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
        render = () => {
          console.log(this.state, this.tasks)
          return (
            <div>
                <div>
                    {this.state.tasks.map(it => <Task{...it} onChangeStatus={this.changeStatus} />)}
                </div>
            <div> <AddTask onAddTask={this.pushTask} /> </div>
      </div>
    )
   }
  }
export default MyTodoList