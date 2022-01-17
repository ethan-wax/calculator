import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function getText(sym) {
  var txt;
  switch (sym) {
    case '+':
      txt = 'plus';
      break;
    case '=':
      txt = 'eq';
      break;
    case '-':
      txt = 'sub';
      break;
    case '*':
      txt = 'mult';
      break;
    case '/':
      txt = 'div';
      break;
    case 'C':
      txt = 'clr';
      break;
    default:
      txt = sym;
      break;
  }
  return txt;
}

function isOp(sym) {
  return (sym === '+' || sym === '-' || sym === '*' || sym === '*' || sym === '/' || sym === '=' || sym === 'C')
}

function add(a, b) {
  return a + b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return b === '0' ? 'Error: Divide by Zero' : parseInt(a / b);
}

function sub(a, b) {
  return a - b
}

class Button extends React.Component {
  render(props) {
    const sym = this.props.value;
    const text = getText(sym);
    return <div id={'btn' + text}
      className={isOp(sym) ? 'op' : 'num'}
      onClick={() => this.props.onClick()}>
      <h2>{this.props.value}</h2>
    </div>;
  }
}

class Display extends React.Component {
  render(props) {
    return <div id="display">
      <h1>{this.props.value}</h1>
    </div>
  };
}

class Caluclator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }


  // This function doesn't handle clearing or equals, but all other buttons
  handleBtnClick(i) {
    const current = this.state.value;
    this.setState({ value: current + i });
  }

  handleClear() {
    this.setState({ value: '' });
  }

  renderButton(i) {
    return <Button value={i} onClick={() => this.handleBtnClick(i)} />
  }

  render() {
    return <div id="maincalc">
      <Display value={this.state.value} />
      {this.renderButton(0)}
      {this.renderButton(1)}
      {this.renderButton(2)}
      {this.renderButton(3)}
      {this.renderButton(4)}
      {this.renderButton(5)}
      {this.renderButton(6)}
      {this.renderButton(7)}
      {this.renderButton(8)}
      {this.renderButton(9)}
      {this.renderButton('+')}
      {this.renderButton('-')}
      {this.renderButton('*')}
      {this.renderButton('/')}
      <Button value='=' />
      <Button value='C' onClick={() => this.handleClear()} />
    </div>;
  }
}


ReactDOM.render(<Caluclator />, document.getElementById('root'));