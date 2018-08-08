import * as React from 'react';
import { ArtistItem } from './ArtistItem';
import { API_ROOT } from './../../api-config';

interface State {
  artist?: Artist | undefined;
  topAlbums?: Album[] | undefined;
  topTracks?: Track[] | undefined;
}

interface Props {
  location?: Location;
}

export class ArtistSearch extends React.Component<any, State> {
  setInputElement: (element: any) => void;
  inputElement: any;

	constructor(props: any) {
		super(props);
    this.searchArtist = this.searchArtist.bind(this);


    var slashPosition = this.props.location.pathname.lastIndexOf('artists/');
    var artistName = null;
    if (slashPosition > 0) {
      artistName = this.props.location.pathname.substring(slashPosition + 8);
    }


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
    fetch(API_ROOT + '/api/artist/'+artistNameSearch)
      .then(res => res.json())
      .then(artist => this.setState({ artist: artist })
      );
	}

  getTopTracks(artistNameSearch: string) {
    fetch(API_ROOT + '/api/toptrack/' + artistNameSearch)
      .then(res => res.json())
      .then(topTracks => this.setState({ topTracks: topTracks })
      );
  }

  getTopAlbums(artistNameSearch: string) {
    fetch(API_ROOT + '/api/topalbum/' + artistNameSearch)
      .then(res => res.json())
      .then(topAlbums => this.setState({ topAlbums: topAlbums })
      );
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

