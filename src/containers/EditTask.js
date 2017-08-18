import React from 'react';
import {connect} from 'react-redux';
import * as taskActions from '../redux/modules/task';
import {bindActionCreators} from 'redux';

class EditTask extends React.Component {

    render() {
        return (
            <div>
                <h1>Edit Task Page {this.props.task}</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditTask);