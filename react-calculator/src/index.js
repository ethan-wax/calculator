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

class Button extends React.Component {
  render(props) {
    const sym = this.props.value;
    const text = getText(sym);
    return <div id={'btn' + text}
      className={isOp(sym) ? 'op' : 'num'}
      onClick={() => console.log(text)}>
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
  render() {
    return <div id="maincalc">
      <Display value='69' />
      <Button value='0' />
      <Button value='1' />
      <Button value='2' />
      <Button value='3' />
      <Button value='4' />
      <Button value='5' />
      <Button value='6' />
      <Button value='7' />
      <Button value='8' />
      <Button value='9' />
      <Button value='+' />
      <Button value='-' />
      <Button value='/' />
      <Button value='*' />
      <Button value='=' />
      <Button value='C' />
    </div>;
  }
}


ReactDOM.render(<Caluclator />, document.getElementById('root'));