import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    } 
    
    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    }

    handleResetValue = () => {
        const counters = this.state.counters.map(counter => counter.value = 0);
    }

    render() { 

        return (
            <div>
                <button
                    onClick={this.handleResetValue}
                    className="btn btn-primary btn-sm m-2">
                    Reset
                </button>
                {this.state.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDelete={this.handleDelete}
                        counter={ counter}
                    />
                )
                }                
            </div>
        );
    }
}
 
export default Counters;