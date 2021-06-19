import React from "react";
import classnames from "classnames/bind";
import styles from "../styles/styles.module.scss"
import {ThemeContext} from "../ThemeContext";
import AddProject from "./ProjectAdd";
import normalizeState from "../data/normalize";
import projects from "../data/data";

const cx = classnames.bind(styles)

export class Home extends React.Component {
    static contextType = ThemeContext

    state = normalizeState(projects)

    clickAddProject = (name) => {
        this.setState({
            projectsById: {
                ...this.state.projectsById,
                [projects.length + 1]: {
                    id: projects.length + 1,
                    name: name,
                    tasksIds: []
                }
            }
        })
    }

    render = () => {
        Object.entries(this.state.projectsById).forEach(([key, value]) => console.log(value))
        return (
            <div>
                <div key={this.props.id} className={cx("Tasks", `Tasks-theme-${this.context}`)}>
                    {Object.entries(this.state.projectsById).map(([key, value]) => {
                        return (
                            <div className={cx("name", `name-theme-${this.context}`)}><a
                                className={cx(`theme-${this.context}`)} href={value.id}>{value.name}</a></div>
                        )
                    })}
                </div>
                <div>
                    <AddProject clickHandler={this.clickAddProject}/>
                </div>
            </div>
        )
    }
}

export default Home