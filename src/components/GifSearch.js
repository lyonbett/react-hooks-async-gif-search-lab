import React from 'react'

class GifSearch extends React.Component {
    state= {
        query: ''
    }

    handleSubmit = (event)=>  {
        event.preventDefault();
        this.props.fetchGifs(this.state.query);
    }

    handleInputChange= (event)=> {
        this.setState({
           query: event.target.value 
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.query} onChange={this.handleInputChange} />
                <button type='submit'>Search</button>
            </form>
        )
    }
}

export default GifSearch;