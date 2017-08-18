import React from 'react';
import {FormControl, FormGroup, ControlLabel} from 'react-bootstrap';
import {connect} from 'react-redux';
import * as taskActions from '../redux/modules/task';
import {bindActionCreators} from 'redux';
import {Redirect} from 'react-router';
import loader from '../assets/img/loader.gif';

class CreateTask extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            task: {title: ''}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    getValidationState() {
        const length = this.state.task.title.length
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
    }


    handleChange(event) {
        this.setState({task: {"title": event.target.value}});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.createTask(this.state.task)
    }

    render() {
        return (
            <div>
                <h1>Create Task</h1>
                {this.props.taskCreated ? <Redirect to="/"/> : null}
                <div className="u-align-center">
                    {this.props.isLoadingTask ? <img className="Loader" alt="Loading..." src={loader}/> : null}
                </div>
                {!this.props.isLoadingTask ? <form onSubmit={this.handleSubmit}>
                    <FormGroup
                        controlId="createTaskForm"
                        validationState={this.getValidationState()}
                    >
                        <ControlLabel>Task title must be larger than 10 character.</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.task.title}
                            placeholder="Enter your task title"
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback/>
                    </FormGroup>
                </form> : null}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoadingTask: state.task.isLoading,
        taskCreated: state.task.taskCreated
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(taskActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);