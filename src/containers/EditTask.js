import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as taskActions from '../redux/modules/task';
import {bindActionCreators} from 'redux';

class EditTask extends React.Component {

    componentDidMount() {
        this.props.getTask(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                <h1>Edit {this.props.task.title}</h1>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoadingTask: state.task.isLoading,
        taskCreated: state.task.taskCreated,
        task: state.task.task
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(taskActions, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditTask));