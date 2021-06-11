import React from "react";
import classnames from "classnames/bind";
import styles from "../styles/styles.module.scss"
import { ThemeContext } from "../ThemeContext";

const cx = classnames.bind(styles)

export class Task extends React.Component {
    static contextType = ThemeContext

    render = () => {
      return (
        <div key={this.props.id} className={cx("Tasks", `Tasks-theme-${this.context}`)}>
          <div className={cx("ID", `ID-theme-${this.context}`)}> {this.props.id}</div> 
          <div className={cx("name", `name-theme-${this.context}`)}><h1 className={cx(`theme-${this.context}`)}>{this.props.name}</h1></div> 
          <div className={cx("description", `description-theme-${this.context}`)}>{this.props.description}</div>
          <button onClick={this.onStatusClick}>{this.props.completed.toString()}</button>
        </div>
    )}
  
    onStatusClick = () => {
      this.props.onChangeStatus(this.props.id)
    }
  }

export default Task