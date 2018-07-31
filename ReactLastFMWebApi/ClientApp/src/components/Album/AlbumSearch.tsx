import { Component } from "react";
import * as React from 'react';
import AlbumList from "./AlbumList";

import axios from 'axios';

class AlbumSearch extends Component<any, any> {
  private inputElement: HTMLInputElement;

  constructor(props: any) {
    super(props);

    this.searchAlbum = this.searchAlbum.bind(this);

    this.state = {
      albums: []
    };
  }

  searchAlbum(event: any): void {

    if (this.inputElement.value !== "") {

      axios.get('http://ws.audioscrobbler.com/2.0/?method=album.search&album=' +
        this.inputElement.value +
        '&api_key=91c70ecd632c37f12855243d9526cc6f&format=json')
        .then(response => {
          this.setState({
            albums: response.data.results.albummatches.album
          });
        });
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
              <input ref={(a: HTMLInputElement) => this.inputElement = a}
                placeholder="enter album name">
              </input>
              <button className="btn" type="submit">Search Album</button>
            </form>
          </div>
        </div>
        <AlbumList entries={this.state.albums} />
      </div>);
  }
}

export default AlbumSearch;