import React from "react";

export class Task extends React.Component {
    render = () => {
      return (
        <div key={this.props.id} class="Tasks">
          <div class="ID"> {this.props.id}</div> 
          <div class="name"><h1>{this.props.name}</h1></div> 
          <div class="description">{this.props.description}</div>
          <button onClick={this.onStatusClick}>{this.props.completed.toString()}</button>
        </div>
    )}
  
    onStatusClick = () => {
      this.props.onChangeStatus(this.props.id)
    }
  }

export default Task