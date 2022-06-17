import React, { Component } from 'react';

class Counter extends Component {
    // state ={ 
    //     value :this.props.counter.value,
    //     // imageUrl :"https://picsum.photos/200"
    //     // tags : ['tag1', 'tag2', 'tag3']

    // }
    // constructor(){
    //     super()
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }

    // handleIncrement = () => {
    //     // console.log(product);
    //     this.setState({value:this.state.value+1})
    // }
    

    render() { 
        
// console.log( this.props);

        return <div>
        
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
             <button
             onClick={()=> this.props.onIncrement(this.props.counter)}
             className='btn btn-success btn-sm'
             >Increment</button>
              <button className="btn btn-danger btn-sm m-2"
               onClick={()=>this.props.onDelete(this.props.counter.id)}
               >Delete</button>
             </div>;

            
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount(){
        const {value: count} = this.props.counter
        return count ===0 ? 'Zero': count;
     }
}
 
export default Counter;