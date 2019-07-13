import React from 'react';
import ReactDOM from 'react-dom';

// function Welcome (prop) {
//   return (
//     <div>
//       <p>Hello, {prop.name}. Welcome to {prop.location}</p>
//     </div>
//   )
// }

class Welcome extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      name: props.name,
      location: props.location
    };
  }

  render() {
    return (
      <div>
        <p>Hello, {this.state.name}. Welcome to {this.state.location}</p>

        <label>Name</label>
        <input onChange={e => this.setState({name: e.target.value })} value={this.state.name}/>
        <label>Location</label>
        <input onChange={e => this.setState({location: e.target.value })} value={this.state.location}/>
      </div>
    )
  }
}

ReactDOM.render(<Welcome name="Bethany" location="Barrie" />, document.querySelector("#root"));