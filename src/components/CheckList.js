import React from 'react';

import ToDoItem from './ToDoItem'
import toDoItems from '../toDoItems';

const items = toDoItems.map(item => {
    return <ToDoItem key={item.id} item={item} />
});

// function CheckList(){
//     return (
//         <div className="container form-group">
//             {items}
//         </div>
//     );
// }

class CheckList extends React.Component {
    constructor() {
        super();
        this.state = {
            items: items
        };
    }
    
    render() {
        return (
            <div className="container form-group">
                {this.state.items}
            </div>
        );
    }
}

export default CheckList;