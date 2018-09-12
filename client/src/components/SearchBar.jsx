import React from 'react';

class SearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // [TBD] Not sure to use 'const' or 'let' here
    const intValue = parseInt(this.state.value);  // Convert value from type string to type number
    this.setState({
      submittedValue: intValue
    });
    this.props.handleSearch(this.state.value);  // Note: no need to convert to number; string works here
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Enter product ID:  
            <input type ="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}



export default SearchBar;