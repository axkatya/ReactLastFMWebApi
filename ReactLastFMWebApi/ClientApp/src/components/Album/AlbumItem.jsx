import { Component } from "react";
import {
  Route,
  Link,
  Redirect,
  RouteComponentProps,
  BrowserRouter as Router
} from 'react-router-dom';
import * as React from 'react';
import ArtistSearch from "../Artist/ArtistSearch";

interface Props {
  entry: Album;
}


class AlbumItem extends Component<Props> {
  props: Props;

  state = {
    redirect: false
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  }
  renderRedirect = (artistName: string) => {
    if (this.state.redirect) {
      return <Redirect to={{ pathname: '/artists/' + artistName }} />;
    };
  }

  showAlbum(item: Album) {
    if (item != null) {

      const filter = Array.prototype.filter;
      const filteredArray = filter.call(item.image, (img: any) => img['size'] === 'large');

      const map = Array.prototype.map;
      const image = map.call(filteredArray, (img: any) => <img src={img['#text']} />);

      const redirectItem = this.renderRedirect(item.artist);
      var artistLink: any = null;
      if (typeof item.artist === 'string') {
        artistLink = <div> 
          {redirectItem}
          <p>
            <button className="btn--link" onClick={this.setRedirect}>{item.artist}</button>
          </p >
        </div>;
      }

      var albumListeners: any = null;
      if (item.playcount != null) {

        albumListeners = <div>
          {item.playcount} listeners
                       </div >;
      }

      return (
        <div className="container__card">
          <div className="card__itemimage">
            {image}
          </div >

          <div className="card__item">

            <div className="card__itemname">
              {item.name}
            </div>
            <div className="card__iteminfo">

              {artistLink}
              {albumListeners}
              <p>
                <a href={item.url}>Link to LastFM</a>
              </p>
            </div>
          </div>
        </div>);
    }
    return null;
  }

  render() {
    var albumEntry = this.props.entry;

    return (
      <div>

        {this.showAlbum(albumEntry)}

      </div>
    );
  }
};

export default AlbumItem;