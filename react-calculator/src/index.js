import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Button extends React.Component {
  render(props) {
    return <div id={'btn' + this.props.value} className={this.props.class}>
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
      <Button value='0' class='num' />
      <Button value='1' class='num' />
      <Button value='2' class='num' />
      <Button value='3' class='num' />
      <Button value='4' class='num' />
      <Button value='5' class='num' />
      <Button value='6' class='num' />
      <Button value='7' class='num' />
      <Button value='8' class='num' />
      <Button value='9' class='num' />
    </div>;
  }
}


ReactDOM.render(<Caluclator />, document.getElementById('root'));