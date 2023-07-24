const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// Change code below this line
Items.propTypes = {
  quantity: PropTypes.number.isRequired
}
// Change code above this line

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};

{/* Divine's Practice Below */}

const Comp1 = (props) => {
  return <h3>Hello, {props.user}</h3>
}

Comp1.propTypes = {
  user: PropTypes.string.isRequired
}

Comp1.defaultProps = {
  user: 'user'
}


class Comp2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Comp1 />
  }
}

ReactDOM.render(<Comp2 />, document.querySelector('#challenge-node'));