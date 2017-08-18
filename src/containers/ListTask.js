import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as taskActions from '../redux/modules/task';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

import loader from '../assets/img/loader.gif';

class ListTask extends React.Component {

    componentDidMount() {
        // get tasks from api with reducer's getTasks action
        this.props.getTasks();
    }

    render() {
        return (
            <div>
                <h1>List Tasks</h1>
                <div className="u-align-center">{this.props.isLoadingTask ?
                    <img className="Loader" src={loader}/> : null}</div>

                <ListGroup>
                    {this.props.isLoadingTask ? null : this.props.tasks.map((task) => <ListGroupItem
                        key={task.id}>{task.title}</ListGroupItem>)}
                </ListGroup>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoadingTask: state.task.isLoading,
        task: state.task.task,
        tasks: state.task.tasks
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(taskActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTask);