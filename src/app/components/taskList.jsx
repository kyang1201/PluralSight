import React from 'react';
import { connect } from 'react-redux'

//use parentheses to return an object instead of curly parentheses which return a function
export const TaskList = ( { tasks, name } ) => (
    <div>
        <h3>{name}</h3>
        {tasks.map(task=>(<div>{task.name}</div>))}
    </div>
    // <div>
    //     <h2>TaskList</h2>
    //     <table>
    //         <th>
    //             <tr>
    //                 <td>Name</td>
    //                 <td>Id</td>
    //                 <td>Complete Status</td>
    //             </tr>
    //         </th>
    //         <tbody>
    //             {tasks.map(task => (
    //                 <tr>
    //                     <td>{task.name}</td>
    //                     <td>{task.id}</td>
    //                     <td>{task.owner}</td>
    //                 </tr>
    //             ))}
    //         </tbody>
    //     </table>
    // </div>
);

const mapStateToProps = (state, ownProps) => {
    let groupId = ownProps.id;
    return {
        name: ownProps.name,
        id: groupId,
        tasks: state.tasks.filter(task=>task.group === groupId)
    }
};

export const ConnectTaskList = connect(mapStateToProps)(TaskList);