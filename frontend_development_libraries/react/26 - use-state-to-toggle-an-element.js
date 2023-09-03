class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // Change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this);
    // Change code above this line
  }
  // Change code below this line
  toggleVisibility () {
    this.setState(function (state) {
      if (state.visibility === true) {
        return {visibility: false}
      } else {
        return {visibility: true}
      }
    })
  }
  // Change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}

// Divine's Practice 1 - change text colour

class TextColor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'green',
      background: 'cyan',
      textTransform: 'uppercase'
    };

    this.toggleColor = this.toggleColor.bind(this);
  }
  toggleColor() {
    this.setState((state) => {
      if (state.color === 'green' && state.textTransform === 'uppercase') {
        return {
          color: 'red',
          textTransform: 'lowercase',
          background: 'yellow'
        }
      } else {
        return {
          color: 'green',
          textTransform: 'uppercase',
          background: 'cyan'
          }
      }
    })
  }
  render() {
    if (this.state.color) {
      return (
        <React.Fragment>
          <h1 style={{color:this.state.color, background: this.state.background}}>Hello World!!</h1>
          <button onClick={this.toggleColor}>change color</button>
        </React.Fragment>
      )
    }
  }
}

ReactDOM.render(<TextColor />, document.querySelector('#challenge-node'))

// Divine's Practice 2 - change text position

class TextPosition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textAlign: 'left'
    }
    this.textReposition = this.textReposition.bind(this);
  }
  textReposition () {
    this.setState((state) => {
      if (state.txtpos === 'left') {
        return {txtpos: 'right'}
      } else {
        return {txtpos: 'left'}
      }
    })
  }
  render() {
    if (this.state.textAlign) {
      return (
        <div>
          <h1 style={{textAlign: this.state.txtpos}}>Text is {this.state.txtpos}</h1>
          <button onClick={this.textReposition}>change text position</button>
        </div>
      )
    }
  }
}

class IncreaseTextOpacity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1
    }
    this.toggleOpacity = this.toggleOpacity.bind(this);
  }
  toggleOpacity () {
    this.setState((state) => {
      if (state.opacity > 0) {
        return {opacity: state.opacity - 0.1-0.1}
      } else {
        return {opacity: 1}
      }
    })
  }
  render() {
    return (
      <div>
        <h2 style={{opacity: this.state.opacity}}>
          Opacity is {this.state.opacity.toFixed(1)}
          {console.log(this.state.opacity.toFixed(1))}
        </h2>
        <button onClick={this.toggleOpacity}>adjust opacity</button>
      </div>
    )
  }
}

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: 'cyan',
      pos: 'off',
      float: 'left',
      background: 'white'
    }
    this.toggleButton = this.toggleButton.bind(this);
  }

  toggleButton () {
    this.setState(state => {
      if (state.pos === 'off') {
        return {
          pos: 'on',
          float: 'right',
          background: 'cyan'
          }
      } else {
        return {
          pos: 'off',
          float: 'left',
          background: 'white'
          }
      }
    })
  }
  render() {
    return (
      <div style={{padding: '1rem'}}>
        <div style={{border:'1px solid', borderRadius:'50px', width:'50px', float:'left', background: this.state.background}}>
          <span style={{width:'20px', height:'20px', border:'1.5px solid black', display:'block', borderRadius:'100%', float:this.state.float, background: 'white'}}></span>
        </div>
        <button onClick={this.toggleButton} style={{margin:'10px 0', width:'50px', float:'left',clear:'left'}}>{this.state.pos}</button>
      </div>
    )
  }
}

function ParentApp() {
  return (
    <div>
      <TextColor /> 
      <TextPosition />
      <IncreaseTextOpacity />
      <ToggleButton />
    </div>
  )
}

ReactDOM.render(<ParentApp />, document.querySelector('#challenge-node'))