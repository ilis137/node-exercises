import React, { Component } from 'react'
import Axios from 'axios';

const API=`http://localhost:3001/api/tasks`
export default class taskList extends Component {
    state = {
		tasks: []
	};
    componentDidMount() {
        Axios.get(`${API}`).then((res)=>{
            const tasks = res.data;
			this.setState({ tasks });
			console.log(tasks);
        })
    }

    render() {
        return ( 
            <div >
                <h2>Tasks List</h2>
				{this.state.tasks.map(task => <li key={task.id}>{task.subject}</li>)}
            </div>
        )
    }
}