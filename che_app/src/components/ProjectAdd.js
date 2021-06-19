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

export class AddProject extends React.Component {
  state = {
    name: ''
  }

  handleChange = (event) => {
    const {value, name} = event.currentTarget

    this.setState({ [name]: value})
  }

  tapButton = () => {
    this.props.clickHandler(this.state.name)
  }

render = () => {
    return( 
      <div>
        <InputNewTask value={this.state.name} onChange={this.handleChange} placeholder='Название' name="name" />
        <NiceButton onClick={this.tapButton} text="Добавить" />
      
      </div>

    )

}

}

export default AddProject