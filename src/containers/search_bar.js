import React from 'react';

class SearchBar extends React.Component {
  constructor(props){
    super(props);

    this.state ={ term: '' };
    //need to bind the context
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault();

    //We need to go and fetch weather data
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className='input-group'>
          <input
            placeholder='Get a 5-day forecast in your favourite cities'
            className='form-control'
            value={this.state.term}
            onChange={this.onInputChange} />
          <span className='input-group-btn'>
            <button type='submit' className='btn btn-secondary'>Submit</button>
          </span>
        </form>
      </div>
    );
  }
}

export default SearchBar;
