import logo from './logo.svg';
import './App.css';
import React from "react";
import './styles/styles.module.scss'
import {MyTodoList} from "./components/TaskList"
import {DEFAULT_THEME, ThemeContext} from "./ThemeContext";
import { Theme } from './components/Theme';

class ThemeComponent extends React.Component {
  state = {
    theme: DEFAULT_THEME
  }
  
  newTheme = (theme) => {
    this.setState({theme: theme})
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <Theme newTheme={this.newTheme}/>
        <MyTodoList />
      </ThemeContext.Provider>
    )
  }
}


const App = () => {
  return <ThemeComponent />
}
export default App;
