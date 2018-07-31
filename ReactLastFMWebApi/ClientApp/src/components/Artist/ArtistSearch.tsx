import { Component } from "react";
import * as React from 'react';
import ArtistItem from "./ArtistItem";
import axios from 'axios';

interface State {
  artist?: Artist;
  topAlbums?: Album[];
  topTracks?: Track[];
}

interface Props {
  location?: any;
}

class ArtistSearch extends Component<Props, State> {
	private inputElement: HTMLInputElement;
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
	}

	getArtist(artistNameSearch: string) {
		axios.get('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' +
			artistNameSearch +
			'&api_key=91c70ecd632c37f12855243d9526cc6f&format=json')
			.then(response => {
				this.setState({
					artist: response.data.artist
				});
			});
	}

  getTopTracks(artistNameSearch: string) {
    axios.get('http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=' +
        artistNameSearch +
        '&api_key=91c70ecd632c37f12855243d9526cc6f&format=json')
      .then(response => {
        this.setState({
          topTracks: response.data.toptracks.track 
        });
      });
  }

  getTopAlbums(artistNameSearch: string) {
    axios.get('http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=' +
        artistNameSearch +
        '&api_key=91c70ecd632c37f12855243d9526cc6f&format=json')
      .then(response => {
        this.setState({
          topAlbums: response.data.topalbums.album
        });
      });
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
        return <ArtistItem entry={state.artist} topAlbums={state.topAlbums} topTracks={null}/>;
      } else if (state.topTracks != null && state.topTracks != undefined) {
        return <ArtistItem entry={state.artist} topAlbums={null} topTracks={state.topTracks} />;
      } else{
        return <ArtistItem entry={state.artist} topAlbums={null} topTracks={null}/>;
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
						<input ref={(a: HTMLInputElement) => this.inputElement = a}
							placeholder="enter artist name">
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