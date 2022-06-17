import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
   
    render() { 
        const  {onReset, counters, onDelete, onIncrement} = this.props
        return (
            <div>
                <button
                onClick={onReset}
                className="btn btn-primary btn-sm m">Reset </button>
               { counters.map(counter => 
               <Counter 
               onDelete = {onDelete}
               onIncrement = {onIncrement}
                key = {counter.id} 
               counter={counter} 
              
               / >
                
               
               
               
               )}
               
            </div>
        );
    }
}
 
export default Counters;