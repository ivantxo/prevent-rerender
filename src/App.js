import React, { Component, PureComponent } from 'react';
import styled from 'styled-components';

const list = new Array(5000).fill(0).map((v, i) => i);

class App extends Component {
  state = {
    perspective: false,
  };

  togglePerspective = () => {
    this.setState(state => ({ perspective: !state.perspective }));
  };
  
  render() {
    console.log('render app');
    return (
      <div>
        <Button onClick={this.togglePerspective}>
          Toggle Perspective
        </Button>

        <Perspective>
          {list.map(v => <Square key={v} number={v} />)}
        </Perspective>
      </div>
    );
  }
}

const Perspective = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => (props.perspective ? 'row' : 'column')};
`;

const Button = ({ onClick, children }) =>
  console.log('render button') || (
  <button type="button" onClick={onClick}>
    {children}
  </button>
);

class Square extends PureComponent {
  render() {
    console.log('render square');
    return <Item>{this.props.number * this.props.number}</Item>;
  }
}

// Using the shouldComponentUpdate life cycle avoids this child component to be re-rendered
// class Square extends Component {
//   shouldComponentUpdate(nextProps, nextState) {
//     if (this.props.number === nextProps.number) {
//       return false;
//     } else {
//       return true;
//     }
//   }

//   render() {
//     console.log('render square');
//     return <Item>{this.props.number * this.props.number}</Item>;
//   }
// }

// If using a stateles component it renders 5000 times every time we press Toggle Perspective
// const Square = ({ number }) => console.log('render square') || <Item>{number * number}</Item>;

const Item = styled.div`
  margin: 10px;
`;

export default App;
