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
ReactDOM.render(<MyCmp />, document.querySelector('#challenge-node'));

{/* practise 2 */}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'user',
      date: 'dd-mm-yy'
    }
    this.getUser = this.getUser.bind(this);
  }
  getUser () {
    this.setState({
      user: 'Divine',
      date: '04-August-2023'
    })
  }
  render() {
    return(
      <div>
        <p>{this.state.user} joined {this.state.date}
        </p>
        <button onClick={this.getUser}>get user</button>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.querySelector('#challenge-node'));

// practise 3
class App_2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appname: "App Name",
      year_produced: "dd-mm-yy",
      author: "Author"
    }
    this.getApp = this.getApp.bind(this);
  }

  getApp () {
    this.setState({
      app_name: <i>"Freecodecamp React Curriculum Practice"</i>,
      year_produced: "2023-08-04",
      author: "Okafor-udah Divine"
    })
  }

  render() {
    return(
      <div>
        <h3>App: {this.state.app_name}</h3>
        <p>Author: {this.state.author}</p>
        <p>Build Year: {this.state.year_produced}</p>

        <button onClick={this.getApp}>Show Details</button>
      </div>
    )
  }
}

ReactDOM.render(<App_2 />, document.getElementById('challenge-node'));






