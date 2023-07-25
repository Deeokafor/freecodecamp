class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line
    this.state = {
      firstName: 'Camper'
    }
    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
};

{/*Divine's practice*/}

class StatefulComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1234,
      age: 23
    }
  }

  render() {
    return(
      <p>
         has id of {this.state.id} and age of {this.state.age}.
      </p>
    )
  }
}

ReactDOM.render(<StatefulComp />, document.querySelector('#challenge-node'));