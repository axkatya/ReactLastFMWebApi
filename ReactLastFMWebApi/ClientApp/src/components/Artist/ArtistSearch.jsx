import { Component } from "react";
import * as React from 'react';
import ArtistItem from "./ArtistItem";

interface State {
  artist?: Artist;
  topAlbums?: Album[];
  topTracks?: Track[];
}

interface Props {
  location?: any;
}

class ArtistSearch extends Component<Props, State> {
  setInputElement: (element: any) => void;
  inputElement: any;
	props: Props;

	constructor(props: Props) {
		super(props);
    this.props = props;
    this.searchArtist = this.searchArtist.bind(this);


    var slashPosition = this.props.location.pathname.lastIndexOf('/');
    var artistName = this.props.location.pathname.substring(slashPosition + 1);

    if (artistName != null && artistName.length > 0) {

      this.getArtist(artistName);
      this.getTopAlbums(artistName);
      this.getTopTracks(artistName);
    }

    this.inputElement = null;
    this.setInputElement = element => {
      this.inputElement = element;
    };

	}

  getArtist(artistNameSearch: string) {
    fetch('https://localhost:44334/api/artist/' + artistNameSearch)
      .then(res => res.json())
      .then(artist => this.setState({ artist: artist })
      );
		//axios.get('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' +
		//	artistNameSearch +
		//	'&api_key=91c70ecd632c37f12855243d9526cc6f&format=json')
		//	.then(response => {
		//		this.setState({
		//			artist: response.data.artist
		//		});
		//	});
	}

  getTopTracks(artistNameSearch: string) {
    fetch('https://localhost:44334/api/toptrack/' + artistNameSearch)
      .then(res => res.json())
      .then(topTracks => this.setState({ topTracks: topTracks })
      );
    //axios.get('http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=' +
    //    artistNameSearch +
    //    '&api_key=91c70ecd632c37f12855243d9526cc6f&format=json')
    //  .then(response => {
    //    this.setState({
    //      topTracks: response.data.toptracks.track 
    //    });
    //  });
  }

  getTopAlbums(artistNameSearch: string) {
    fetch('https://localhost:44334/api/topalbum/' + artistNameSearch)
      .then(res => res.json())
      .then(topAlbums => this.setState({ topAlbums: topAlbums })
      );
    //axios.get('http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=' +
    //    artistNameSearch +
    //    '&api_key=91c70ecd632c37f12855243d9526cc6f&format=json')
    //  .then(response => {
    //    this.setState({
    //      topAlbums: response.data.topalbums.album
    //    });
    //  });
  }

	searchArtist(event: any): void {

		if (this.inputElement.value !== "") {
      this.getArtist(this.inputElement.value);
      this.getTopAlbums(this.inputElement.value);
		  this.getTopTracks(this.inputElement.value);
		}

		event.preventDefault();
	}

	addArtist(state: State) {
    if (state != null && state.artist != null) {

      if (state.topAlbums != null && state.topTracks != null && state.topAlbums != undefined && state.topTracks != undefined) {
        return <ArtistItem entry={state.artist} topAlbums={state.topAlbums} topTracks={state.topTracks}/>;
      } else if (state.topAlbums != null && state.topAlbums != undefined) {
        return <ArtistItem entry={state.artist} topAlbums={state.topAlbums} topTracks={undefined}/>;
      } else if (state.topTracks != null && state.topTracks != undefined) {
        return <ArtistItem entry={state.artist} topAlbums={undefined} topTracks={state.topTracks} />;
      } else{
        return <ArtistItem entry={state.artist} topAlbums={undefined} topTracks={undefined}/>;
      }
		}
		return null;
	}

	render() {
		var artist = this.addArtist(this.state);
		return (
      <div className="container__search">
				Artists
				<div>
					<form onSubmit={this.searchArtist}>
						<input ref={this.setInputElement} placeholder="enter artist name">
            </input>

            <button className="btn" type="submit">Search Artist</button>
					</form>
        </div>

				{artist}

			</div>
		);
	}
}

export default ArtistSearch;