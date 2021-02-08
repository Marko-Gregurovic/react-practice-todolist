import React from 'react';

function ToDoItem(text){
    return (
        <div className="form-control bg-dark text-light">
            <input style={{backgroundColor: "#20FF20", borderColor: "#20FF20"}} className="form-check-input btn-primary" type="checkbox"/>
            <label className="form-check-label"> {`${text}`}</label><br/>
        </div>
    );
}

export default ToDoItem;