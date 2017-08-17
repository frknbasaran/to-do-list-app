import React from 'react';
import {connect} from 'react-redux';
import * as authActions from '../redux/modules/auth';
import * as taskActions from '../redux/modules/task';
import {bindActionCreators} from 'redux';
import {withRouter, Route, Switch, Link} from 'react-router-dom';

import EditTask from './EditTask';
import CreateTask from './CreateTask';
import ListTask from './ListTask';

class App extends React.Component {

    componentDidMount(){
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <p>To Do List App w/ React</p>
                <Link to={{pathname: '/'}}>All Tasks</Link>
                <Link to={{pathname: '/new-task'}}>Create New Task</Link>
                <Switch>
                    <Route exact path="/" component={ListTask}/>
                    <Route exact path="/new-task" component={CreateTask}/>
                    <Route exact path="/edit-task/:id" component={EditTask}/>
                </Switch>

                <button onClick={()=>this.props.login('gox','123')}>Login</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLogged: state.auth.isLogged,
        isLoadingAuth: state.auth.isLoading,
        user:state.auth.user,
        isLoadingTask: state.task.isLoading,
        task:state.task.task,
        tasks:state.task.tasks
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({...authActions, ...taskActions}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));