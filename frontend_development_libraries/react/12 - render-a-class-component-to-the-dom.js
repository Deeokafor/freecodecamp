class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
        <Fruits />
        <Vegetables />
        {/* Change code above this line */}
      </div>
    );
  }
};

// Change code below this line

const MyFoods = () => {
  return (
    <div>React DOM!!</div>
  )
}

class Groot extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>More Divs</div>
    );
  }
}

ReactDOM.render (<TypesOfFood />, document.querySelector('#challenge-node'));