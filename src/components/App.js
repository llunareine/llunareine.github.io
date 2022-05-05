import React, { useState, useEffect} from 'react'
import YouTube from '../api/API';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
      OnTermSubmit('Minecraft');
  }, []);

  const OnTermSubmit = async term => {
      const responce = await YouTube.get('/search', {
          params: {
              q: term,
          },
      });
          setVideos(responce.data.items);
          setSelectedVideo(responce.data.items[0]);  
  };
  
  
  const onVideoSelect = video => {
      setSelectedVideo(video);
  };

  return(
          <div className="ui container" style={{marginTop: '10px'}}>
              <SearchBar OnSearchSubmit={OnTermSubmit} />
              <div className="ui grid" style={{marginTop: '0.5rem'}}>
                  <div className="ui row">
                      <div className="eleven wide column">
                          <VideoDetail video={selectedVideo} />
                      </div>
                      <div className="five wide column">
                          <VideoList onVideoSelect={onVideoSelect} videos={videos} />
                      </div>
                  </div>
              </div>
          </div>
      );
};
export default App;
