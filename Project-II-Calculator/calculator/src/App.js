import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';

class App extends React.Component {
  state = {
    total: "0"
  };

  slideNum(num) {
    this.setState.total = num;
    console.log(this.state);
  }

  render() {
    return (
      <div className="calculator">
      <div className="display">
        <CalculatorDisplay text={this.state.total}/>
      </div>
      <div className="buttons">
        <div className="numbers">
          <NumberButton buttonStyle="rectangle" text="CLEAR" />
          <NumberButton buttonStyle="square" text="1" onClick={() => console.log('click')} />
          <NumberButton buttonStyle="square" text="2" />
          <NumberButton buttonStyle="square" text="3" />
          <NumberButton buttonStyle="square" text="4" />
          <NumberButton buttonStyle="square" text="5" />
          <NumberButton buttonStyle="square" text="6" />
          <NumberButton buttonStyle="square" text="7" />
          <NumberButton buttonStyle="square" text="8" />
          <NumberButton buttonStyle="square" text="9" />
          <NumberButton buttonStyle="rectangle" text="0" />
        </div>
        <div className="operators">
          <ActionButton buttonStyle="square operator__symbol" text="÷" />
          <ActionButton buttonStyle="square operator__symbol" text="×" />
          <ActionButton buttonStyle="square operator__symbol" text="-" />
          <ActionButton buttonStyle="square operator__symbol" text="+" />
          <ActionButton buttonStyle="square operator__symbol" text="=" />
        </div>
      </div>
      </div>
    );
  };
};

export default App;
