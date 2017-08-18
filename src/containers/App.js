import React from 'react';
import {connect} from 'react-redux';
import * as authActions from '../redux/modules/auth';
import * as taskActions from '../redux/modules/task';
import {bindActionCreators} from 'redux';
import {withRouter, Route, Switch} from 'react-router-dom';

import EditTask from './EditTask';
import CreateTask from './CreateTask';
import ListTask from './ListTask';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../assets/css/main.css';


class App extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <div className="App">
                <Header/>
                <Content>
                    <Switch>
                        <Route exact path="/" component={ListTask}/>
                        <Route path="/new-task" component={CreateTask}/>
                        <Route path="/edit-task/:id" component={EditTask}/>
                    </Switch>
                </Content>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLogged: state.auth.isLogged,
        isLoadingAuth: state.auth.isLoading,
        user: state.auth.user
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({...authActions, ...taskActions}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));