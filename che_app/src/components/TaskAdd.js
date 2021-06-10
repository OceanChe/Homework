import React from "react";

const InputNewTask = ({value, onChange, placeholder, name}) => {
    return (
      
      <input value={value} onChange={onChange} placeholder={placeholder} name={name} /> 

    )

}

const NiceButton = ({onClick, text}) => {
  return (
    <button onClick={onClick} className="Buttons">{text}</button>
  )
}

export class AddTask extends React.Component {
  state = {
    name: '',
    description: ''

  }


  handleChange = (event) => {
    const {value, name} = event.currentTarget

    this.setState({ [name]: value})
  }

  tapButton = () => {
    this.props.onAddTask ({name:this.state.name, description:this.state.description})  
    this.setState({"name" : '', "description": ''})
  }

render = () => {
    return( 
      <div>
        <InputNewTask value={this.state.name} onChange={this.handleChange} placeholder='Название' name="name" />
        <InputNewTask value={this.state.description} onChange={this.handleChange} placeholder='Описание' name="description" />
        <NiceButton onClick={this.tapButton} text="Добавить" />
      
      </div>

    )

}

}

export default AddTask