import React from 'react';

function ToDoItem(props){
    let styling = {
        backgroundColor: "#20FF20",
        borderColor: "#20FF20"
    };
    let styleLable = {
        textDecoration: "line-through",
        //textDecorationColor: "#000000",
        color: "#808080",
        fontStyle: "italic"
    };
    return (
        <div className="form-control bg-dark text-light">
            <input 
                onChange={(event) => props.handleChange(props.item.id)}
                style={styling} 
                className="form-check-input btn-primary" 
                type="checkbox" 
                checked={props.item.completed}
            />
            <label className="form-check-label" style={props.item.completed ? styleLable : null}> {`${props.item.text}`}</label><br/>
        </div>
    );
}

export default ToDoItem;