import React, { Component, Fragment } from 'react';
import './App.css';
import Counters from './components/counters';
import Movies from './components/movies';
import NavBar from './components/navbar';


class App extends Component {
  state = { 
    counters: [
        {id: 1, value: 4},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0}
    ]
  } 

  handleIncrement = counter => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value++;
      this.setState({ counters });
  }

  handleDelete = counterId => {
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({ counters });
  }

  handleReset = () => {
      const counters = this.state.counters.map(counter => counter.value = 0);
  }
  render() {
    return (
        <Fragment>
            <NavBar
                totalCounters={this.state.counters.filter(c => c.value > 0).length}
            />,
            <main className='container'>
              <Counters
                counters={this.state.counters}
                onReset={this.handleReset}
                onDelete={this.handleDelete}
                onIncrement={this.handleIncrement}
              />
            </main>
        </Fragment>
      )
    }
}


export default App;
