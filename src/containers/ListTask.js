import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as taskActions from '../redux/modules/task';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import {ContextMenu, MenuItem, ContextMenuTrigger} from "react-contextmenu";
import {Redirect} from 'react-router';

import loader from '../assets/img/loader.gif';
import 'react-contextmenu/public/styles.5bb557.css';

class ListTask extends React.Component {

    componentDidMount() {
        // get tasks from api with reducer's getTasks action
        this.props.getTasks();
    }

    collect(props) {
        return {id: props.item};
    }

    handleClick = (e, data, target) => {
        if (data.action === 'delete') {
            this.props.removeTask(data.id);
        }

        if (data.action === 'edit') {
            this.props.history.push('edit-task/' + data.id)
        }
    }

    render() {
        return (
            <div>
                <h1>List Tasks</h1>
                <div className="u-align-center">
                    {
                        this.props.isLoadingTask ?
                            <img className="Loader" alt="Loading..." src={loader}/> :
                            null
                    }
                </div>
                <ListGroup>
                    {
                        this.props.isLoadingTask ?
                            null :
                            this.props.tasks.map((task) => {
                                    return <ListGroupItem key={task.id}>
                                        <ContextMenuTrigger item={task.id} collect={this.collect} id="rightMenu">
                                            {task.title}
                                        </ContextMenuTrigger>
                                    </ListGroupItem>
                                }
                            )
                    }
                </ListGroup>
                <ContextMenu id="rightMenu">
                    <MenuItem data={{'action': 'edit'}} onClick={this.handleClick}>
                        Düzenle
                    </MenuItem>
                    <MenuItem data={{'action': 'delete'}} onClick={this.handleClick}>
                        Sil
                    </MenuItem>
                </ContextMenu>
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