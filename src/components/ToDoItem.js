import React from 'react';

function ToDoItem(props){
    return (
        <div className="form-control bg-dark text-light">
            <input style={{backgroundColor: "#20FF20", borderColor: "#20FF20"}} className="form-check-input btn-primary" type="checkbox" checked={props.item.completed}/>
            <label className="form-check-label"> {`${props.item.text}`}</label><br/>
        </div>
    );
}

export default ToDoItem;