import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';

class App extends React.Component {
    state = {
      num1: null,
      num2: null,
      function: null,
      display: [0]
    };

  clearAll() {
    this.setState({
      num1: null,
      num2: null,
      function: null,
      display: [0]
    });
  }

  slideNum(num) {
    if (this.state.display[0].length >= 5) {
      console.log("too many buttons");
    } else {
      if (this.state.display.toString() === "0") {
        this.setState({display: [num]});
      } else {
        let slide = this.state.display;
        slide.push(num);
        this.setState({display: [slide.join('')]});
      }
      console.log(this.state);
    }
  }

  divide() {
    if (this.state.function) {
      alert('Please click the equals sign before performing another operation.');
    } else {
      let first = this.state.display[0];
      this.setState({
        num1: first,
        function: ' / ',
        display: [0]
      });
      console.log(this.state);
    }
  }

  multiply() {
    if (this.state.function) {
      alert('Please click the equals sign before performing another operation.');
    } else {
      let first = this.state.display[0];
      this.setState({
        num1: first,
        function: ' * ',
        display: [0]
      });
      console.log(this.state);
    }
  }

  subtract() {
    if (this.state.function) {
      alert('Please click the equals sign before performing another operation.');
    } else {
      let first = this.state.display[0];
      this.setState({
        num1: first,
        function: ' - ',
        display: [0]
      });
      console.log(this.state);
    }
  }

  add() {
    if (this.state.function) {
      alert('Please click the equals sign before performing another operation.');
    } else {
      let first = this.state.display[0];
      this.setState({
        num1: first,
        function: ' + ',
        display: [0]
      });
      console.log(this.state);
    }
  }

  equals() {
    if (this.state.num1 && this.state.function) {
      let result = Math.floor(eval(String(this.state.num1 + this.state.function + this.state.display[0])));
      let test = String(result);
      if (test.length > 7) {
        result = "Too big!"
      }
      this.setState({
        num1: null,
        function: null,
        display: [result]
      });
    }
    console.log(this.state);
  }


  render() {
    return (
      <div className="calculator">
        <div className="display">
          <CalculatorDisplay 
          text={this.state.display.toString()} 
          operation={this.state.function ? this.state.function : " "}
          />
        </div>
        <div className="buttons">
          <div className="numbers">
            <NumberButton buttonStyle="rectangle" text="CLEAR" onClick={() => this.clearAll()}/>
            <NumberButton buttonStyle="square" text="7" onClick={() => this.slideNum(7)} />
            <NumberButton buttonStyle="square" text="8" onClick={() => this.slideNum(8)} />
            <NumberButton buttonStyle="square" text="9" onClick={() => this.slideNum(9)} />
            <NumberButton buttonStyle="square" text="4" onClick={() => this.slideNum(4)} />
            <NumberButton buttonStyle="square" text="5" onClick={() => this.slideNum(5)} />
            <NumberButton buttonStyle="square" text="6" onClick={() => this.slideNum(6)} />
            <NumberButton buttonStyle="square" text="1" onClick={() => this.slideNum(1)} />
            <NumberButton buttonStyle="square" text="2" onClick={() => this.slideNum(2)} />
            <NumberButton buttonStyle="square" text="3" onClick={() => this.slideNum(3)} />
            <NumberButton buttonStyle="rectangle" text="0" onClick={() => this.slideNum(0)} />
          </div>
          <div className="operators">
            <ActionButton buttonStyle="square operator__symbol" text="÷" onClick={() => this.divide()} />
            <ActionButton buttonStyle="square operator__symbol" text="×" onClick={() => this.multiply()} />
            <ActionButton buttonStyle="square operator__symbol" text="-" onClick={() => this.subtract()} />
            <ActionButton buttonStyle="square operator__symbol" text="+" onClick={() => this.add()} />
            <ActionButton buttonStyle="square operator__symbol" text="=" onClick={() => this.equals()} />
          </div>
        </div>
      </div>
    );
  };
};

export default App;
