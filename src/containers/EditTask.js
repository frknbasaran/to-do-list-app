import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as taskActions from '../redux/modules/task';
import {FormControl, FormGroup, ControlLabel} from 'react-bootstrap';
import {bindActionCreators} from 'redux';

class EditTask extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            task: {title: ''}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getTask(this.props.match.params.id);
    }

    handleChange(event) {
        this.setState({task: {"title": event.target.value}});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.editTask(this.state.task.id, this.state.task.title)
    }

    render() {
        return (
            <div>
                <h1>Edit {this.props.task.title}</h1>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="editTaskForm">
                        <ControlLabel>Task title must be larger than 10 character.</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.task.title}
                            placeholder="Enter your task title"
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback/>
                    </FormGroup>
                </form>
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