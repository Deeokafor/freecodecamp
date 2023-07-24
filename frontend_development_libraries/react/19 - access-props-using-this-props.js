class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Change code below this line */ }
            <Welcome name='Divine'/>
            { /* Change code above this line */ }
        </div>
    );
  }
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          { /* Change code below this line */ }
          <p>Hello, <strong>{this.props.name}</strong>!</p>
          { /* Change code above this line */ }
        </div>
    );
  }
};

{/* Divine's practise */}

class App2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Comp1 attribute='My App'/>
    );
  }
};

class Comp1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <p>The Apps 1st Component is <em>{this.props.attribute}</em></p>
    );
  }
};

ReactDOM.render(<App2 />, document.querySelector('#challenge-node'));