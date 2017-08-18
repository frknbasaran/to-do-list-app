import React from 'react';
import {FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';
import {connect} from 'react-redux';
import * as taskActions from '../redux/modules/task';
import {bindActionCreators} from 'redux';

class CreateTask extends React.Component {

    componentDidMount() {
        console.log(this.props);
    }

    getValidationState() {
        /*
        const length = this.props.task.title.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        */
    }

    handleChange(e) {
        this.setState(this.props.task, {id: this.props.task.id, title: e.target.value});
    }

    render() {
        return (
            <div>
                <h1>Create Task</h1>
                <form>
                    <FormGroup
                        controlId="formBasicText"
                        validationState={this.getValidationState()}
                    >
                        <ControlLabel>Working example with validation</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.props.task.title}
                            placeholder="Enter title for your task"
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback/>
                        <HelpBlock>Validation is based on string length.</HelpBlock>
                    </FormGroup>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoadingTask: state.task.isLoadingTask,
        task: state.task.task
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(taskActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);