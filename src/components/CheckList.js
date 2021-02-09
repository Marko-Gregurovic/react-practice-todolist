import React from 'react';

import ToDoItem from './ToDoItem'
import toDoItems from '../toDoItems';
import { NavItem } from 'react-bootstrap';

const items = toDoItems.map(item => {
    return <ToDoItem key={item.id} item={item} />
});

function CheckList(){
    return (
        <div className="container form-group">
            {items}
        </div>
    );
}

export default CheckList;