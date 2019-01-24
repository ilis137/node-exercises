import React, { Component } from 'react'
import axios from "axios"
const API = 'http://localhost:3001/api/projects';
export default class projectList extends Component {
    state={
        projects:[]
    }

    componentDidMount(){
        axios.get(`${API}`).then((res)=>{
            const projects = res.data;
            this.setState({ ...this.state,
                               projects });
			        console.log(projects);
        })
    }
  render() {
    return (
      <div>
        <h2>Projects List</h2>
        {this.state.projects.map(project=>(
            <li key={project.id}>{project.name}</li>
        ))}
      </div>
    )
  }
}
