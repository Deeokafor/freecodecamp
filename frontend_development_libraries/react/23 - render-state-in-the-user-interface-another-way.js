class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // Change code below this line
    const name = this.state.name;
    // Change code above this line
    return (
      <div>
        { /* Change code below this line */ }
        <h1>{name}</h1>
        { /* Change code above this line */ }
      </div>
    );
  }
};

{/* Divine's practice */}
class DeeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: 'Larcey Quincey',
      year: `25 July, 2023`,
      curriculum: `Frontend Development Libraries`,
      practitioner: `Divine Okafor-udah`
    }
  }
  render() {
    const author = this.state.author;
    const year = this.state.year;
    const curriculum = this.state.curriculum;
    const practitioner = this.state.practitioner;
    return(
      <p>
        Author: {author} <br />
        year: {year} <br />
        curriculum: {curriculum} <br />
        Student: {practitioner} <br />
      </p>
    )
  }
}

ReactDOM.render(<DeeComponent />, document.querySelector('#challenge-node'));