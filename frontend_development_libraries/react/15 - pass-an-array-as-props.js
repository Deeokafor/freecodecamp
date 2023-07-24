const List = (props) => {
  { /* Change code below this line */ }
  return <p>{props.tasks.join(', ')}</p>
  { /* Change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* Change code below this line */ }
        <List tasks={['read tailwindcss documentation', 'take a walk']}/>
        <h2>Tomorrow</h2>
        <List tasks={['drink fearless', 'build ui', 'study react']}/>
        { /* Change code above this line */ }
      </div>
    );
  }
};

{/* Divine's practise code below */}

const TODO = (props) => {
  return(
    <React.Fragment>
      <h2>Tasks For Today:-</h2>
      <p>{props.tasks.join(', ')}</p>
    </React.Fragment>
  )
}

class Elem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <TODO tasks={['walk', 'sing', 'dance', 'read']}/>
    )
  }
}

ReactDOM.render(<Elem />, document.querySelector('#challenge-node'));