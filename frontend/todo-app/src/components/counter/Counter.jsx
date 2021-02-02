import React from 'react';
import ReactDOM from 'react-dom';
import './Counter.css';


function Counter() {
    return (
      <div className="counter">
          <button onClick={increment()}  >+1</button>
          <span className="count">0</span>
      </div>
    );
  }

  function increment()
  {
    console.log('in increment');
  }

  export default Counter;