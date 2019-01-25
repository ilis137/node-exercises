import React, { Component } from 'react';
import {Switch,Route,Redirect} from "react-router-dom"

import projectList from "./components/projectList/projectList"
import TasksList from "./components/taskList/taskList"
import ProjectItem from "./components/projectItem/projectItem"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      
       <Switch>
          <Route path="/" exact component={projectList}/>
          <Route path="/tasks" exact component={TasksList} />
					<Route path="/projects/:id" component={ProjectItem} />
					<Redirect from="/projects" to="/" />
      </Switch>
  
      </div>
    );
  }
}

export default App;
