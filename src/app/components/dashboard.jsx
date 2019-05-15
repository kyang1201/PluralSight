import React from 'react';
import { connect } from 'react-redux'
import { ConnectTaskList } from './taskList';

//use parentheses to return an object instead of curly parentheses which return a function
export const Dashboard = ( { groups } ) => (
    <div>
        <h2>Dashboard</h2>
        {groups.map(group => (
            <ConnectTaskList id={group.id} name={group.name}></ConnectTaskList>
        ))}
    </div>
);

function mapStateToProps (state) {
    return {
        groups:state.groups
    }
}

export const ConnectDashboard = connect(mapStateToProps)(Dashboard);