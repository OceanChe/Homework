import logo from './logo.svg';
import './App.css';
import React from "react";
import './styles/styles.module.scss'
import {MyTodoList} from "./components/TaskList"
import {DEFAULT_THEME, ThemeContext} from "./ThemeContext";
import { Theme } from './components/Theme';
import {BrowserRouter, Switch, Route, Link, Redirect, withRouter} from "react-router-dom"
import Home from './components/Home';


const Error = () => {
  return (
      <div> COMPONENT NOT FOUND</div>
  )
}

class ThemeComponent extends React.Component {
  state = {
    theme: DEFAULT_THEME
  }
  
  newTheme = (theme) => {
    this.setState({theme: theme})
  }

  render() {
    return (
      <BrowserRouter>
        <ThemeContext.Provider value={this.state.theme}>
          <Theme newTheme={this.newTheme}/>
          <Route path='/'>
                        <Switch>
                            <Route exact path='/home' component={Home}/>
                            <Route exact path='/:id' component={MyTodoList}/>
                            <Route exact path='/' component={Error}/>
                        </Switch>
                    </Route>
        </ThemeContext.Provider>
        </BrowserRouter>
    )
  }
}


const App = () => {
  return <ThemeComponent />
}
export default App;
