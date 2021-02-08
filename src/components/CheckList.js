import React from 'react';

import ToDoItem from './ToDoItem'

function CheckList(){
    return (
        <div className="container form-group">
            {new ToDoItem('first')}
            {new ToDoItem('second')}
            {new ToDoItem('third')}
        </div>
    );
}

export default CheckList;