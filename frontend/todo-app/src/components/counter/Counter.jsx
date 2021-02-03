import { render } from '@testing-library/react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Counter.css';
import PropTypes from 'prop-types';

class Counter extends Component {

    constructor(){
        super();
        this.state = {
            count : 0
        }

        this.increment = this.increment.bind(this);
    }
    render()
    {
        return (
            <div  className="counter">
                <CounterButton/>
                <CounterButton by={5} />
                <CounterButton by={20} />
            </div>
          );
    }

    increment()
    {
      this.setState({
          count:  this.state.count + this.props.by
      });
    }
}

class CounterButton extends Component {

    constructor(){
        super();
        this.state = {
            count : 0
        }

        this.increment = this.increment.bind(this);
    }

    render()
    {
        return (
            <div className="counter">
                <button onClick={this.increment}> + {this.props.by} </button>
                <span className="count">{this.state.count}</span>
            </div>
          );
    }

  increment()
  {
    //this.state.count = this.state.count +1;
    this.setState({
        count:  this.state.count + this.props.by
    });
  //  console.log('in increment');
  }

  }

  CounterButton.defaultProps = {
      by: 1
  }

  /*
  Counter.PropTypes = {
    by: PropTypes.number
}
*/
  export default Counter;