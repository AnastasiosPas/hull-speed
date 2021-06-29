import React from 'react';
import './Calc.css';

  
class Calc extends React.Component {
    constructor() {
      super();
      this.state = {
        inputFeet: "",
        submit: ""
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({
        inputFeet: event.target.value,
      });
    }

    handleSubmit(event) {
      event.preventDefault();

      this.setState({
        submit: this.state.inputFeet
      })
      }

    render() {
      return (
        <div className="Calc">
          <form onSubmit={this.handleSubmit}>
              <h1>Boat hullspeed calculator</h1><br />
              <h2>Please enter the length of the waterline in Feet.</h2>
            <input placeholder="Waterline in Feet" className="pa3 ba b--green bg-lightest-blue " type="number" 
              value={this.state.inputFeet}
              onChange={this.handleChange} min={1} /><br/>
            <button type='submit'>Calculate Hull Speed</button>
          </form>
          <h2>The hullspeed of your boat is: </h2>
          <h2> {Math.round((1.34 * Math.sqrt(this.state.submit))*10) / 10}  knots.</h2>
          <h2>Or {(Math.round((1.34 * Math.sqrt(this.state.submit))*10*1.852) / 10)}  km/h </h2>
        </div>
      );
    }
  };
  

  export default Calc;