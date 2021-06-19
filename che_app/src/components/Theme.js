import React from "react";
import { ThemeContext } from "../ThemeContext";
import classnames from "classnames/bind";
import styles from "../styles/styles.module.scss"

const cx = classnames.bind(styles)

export class Theme extends React.Component {
    static contextType = ThemeContext

    render = () => {
      return (
        <div className={cx("Tasks")}>
          <input type="radio" value="light" checked={this.context === "light"}
                               onClick={() => this.props.newTheme("light")}/> Light theme
                        <input type="radio" value="dark" checked={this.context === "dark"}
                               onClick={() => this.props.newTheme("dark")}/> Dark theme
                       <a href="/home">Home</a>
        </div>
    )}
  }

export default Theme