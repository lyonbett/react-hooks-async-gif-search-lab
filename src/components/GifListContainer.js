import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends React.Component {
  state = {
    gifs: []
  };

  fetchGifs = (query) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=IDj4Ird3kDpRpRDEj6vawawTBo1fGGTT&rating=g`;
    fetch(url)
      .then(response => response.json())
      .then(({ data }) => {
        console.log(data);
        this.setState({
          gifs: data.map(result => ({ id: result.id, url: result.images.original.url, title: result.title }))
        });
      })
      .catch(error => console.log(error));
  };  

  componentDidMount() {
    this.fetchGifs();
  }

  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;