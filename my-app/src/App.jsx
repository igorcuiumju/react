import React, { Component } from 'react';
import YTSearch from 'youtube-api-search'

import './App.css';

import IncraseDecrease from './components/IncraseDecrease';
import SearchBar from './components/Search';
import YoutubeValid from './components/Youtube'


const api_key = 'AIzaSyAlRChG0xOGrnCMwVnyVinZ8iV3gD8fvhc';


class App extends Component {

  constructor(props) {
    super();

    this.state = {
      searchTerm: '',
      videos: [],
      selectedVideo: null
    };
  }

  handleGetVideo() {
    YTSearch({ key: api_key, term: 'this.state.searchTerm' }, (data) => {
      this.setState({ videos: data });
    })
  }

  handleInputChange(key, event) {
    this.setState({ [key]: event.target.value });
  }

  handleSelectedVideo(videoUrl) {
    this.setState({selectedVideo: videoUrl})
  }


  render() {
    const { searchTerm, videos, selectedVideo } = this.state;

    console.log(this.state.videos);
    return (

    <div className="App">
      <h1>Youtube aplication</h1>

      <IncraseDecrease />
      <br />
      <SearchBar />
      <br />

      <div>
        <YoutubeValid
          onInputChange={this.handleInputChange.bind(this, 'searchTerm')}
          ovBtnClick={this.handleGetVideo.bind(this, searchTerm)}
          value={searchTerm}
        />

          { selectedVideo ? 
            (<div className="yt-video">
              <br />
              <iframe width="560" height="315" src={selectedVideo}  allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>) : null }

        {videos.map((video, index) => {
            const videoUrl = 'https://www.youtube.com/embed/${video.id.videoId}';
          return (
            <div onClick={this.handleSelectedVideo.bind(this, videoUrl)} key={index}>
              <h3>{video.snippet.title}</h3>
              <img src={video.snippet.thumbnails.medium.url} width="320" height="180" alt="video" />
            </div>
          )
        })}

      </div>

    </div>
    );
  }
}

export default App;
