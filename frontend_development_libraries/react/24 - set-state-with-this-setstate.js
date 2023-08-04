class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Change code below this line
    this.setState({
      name: 'React Rocks!'
    })
    // Change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};

{/*Divine's Practice Below */}

class MyCmp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      string : 'default string'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.setState({
      string: 'string change!'
    })
  }

  render() {
    return(
      <React.Fragment>
        <p>{this.state.string}</p>
        <button onClick={this.handleClick}>Click to change text</button>
      </React.Fragment>
    )
  }
}

const drender = (elem, target) => {
  ReactDOM.render(elem, target);
}

drender(<MyCmp />, document.querySelector('#challenge-node'))

/* practise 2 */







