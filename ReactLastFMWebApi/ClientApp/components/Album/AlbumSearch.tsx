import * as React from 'react';
import { AlbumList } from './AlbumList';
import { API_ROOT } from './../../api-config';

export class  AlbumSearch extends React.Component<any, any> {
  inputElement: any;

  constructor(props: any) {
    super(props);

    this.searchAlbum = this.searchAlbum.bind(this);

    this.state = {
      albums: []
    };
  }

  searchAlbum(event: any): void {

    if (this.inputElement.value !== "") {
      fetch(API_ROOT + '/api/album/' + this.inputElement.value)
        .then(res => res.json())
        .then(albums => this.setState({ albums: albums })
        );
    }

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="container__search">
          Albums
				<div>
            <form onSubmit={this.searchAlbum}>
              <input id="lblAlbumNameSearch" ref={(a: any) => this.inputElement = a}
                placeholder="enter album name">
              </input>
              <button id="btnAlbumNameSearch" className="btn" type="submit">Search Album</button>
            </form>
          </div>
        </div>
        <AlbumList entries={this.state.albums} />
      </div>);
  }
}

