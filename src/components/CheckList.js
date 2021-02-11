import React from 'react';

import ToDoItem from './ToDoItem'
import toDoItems from '../toDoItems';



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
            items: toDoItems
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState(prevState => {
            const newItems = prevState.items.map(item => {
                if(item.id === id){
                    item.completed = !item.completed;
                }
                return item;
            });
            return {
                items: newItems
            }
        });
    }

    render() {
        const items = this.state.items.map(item => {
            return <ToDoItem key={item.id} item={item} handleChange={this.handleChange}/>
        });

        return (
            <div className="container form-group">
                {items}
            </div>
        );
    }
}

export default CheckList;