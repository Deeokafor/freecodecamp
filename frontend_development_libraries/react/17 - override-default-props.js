const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* Change code below this line */ }
    return <Items quantity = {10}/>
    { /* Change code above this line */ }
  }
};

{/* divine's practice below */}

const MyDefaultProps = (props) => {
  return <h1>{props.item}</h1>
}

MyDefaultProps.defaultProps = {
  item: 40
}




ReactDOM.render(<MyDefaultProps />, document.querySelector('#challenge-node'));