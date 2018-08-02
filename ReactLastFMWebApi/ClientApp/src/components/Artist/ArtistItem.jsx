import { Component } from "react";
import * as React from 'react';
import AlbumList from "../Album/AlbumList";
import TrackList from "../Track/TrackList";

interface Props {
  entry: Artist;
  topAlbums?: Album[] | undefined;
  topTracks?: Track[] | undefined;
}

class ArtistItem extends Component<Props> {
  props: Props;

  showArtist(item: Artist) {
    if (item !== null && item !== undefined && item.name != null && item.name.length > 0) {

      const filter = Array.prototype.filter;
      const filteredArray = filter.call(item.image, (img: any) => img['size'] === 'large');

      const map = Array.prototype.map;
      const image = map.call(filteredArray, (img: any) => <img src={img['#text']} />);

      let topAlbums: any = null;
      if (this.props.topAlbums != null && this.props.topAlbums != undefined) {
        topAlbums = <div>
          <p className="card__itemsubtitle">
            Top Albums
          </p>
          <AlbumList entries={this.props.topAlbums} />
        </div>;
      }

      let topTracks: any = null;
      if (this.props.topTracks != null && this.props.topTracks != undefined) {
        topTracks = <div>
          <p className="card__itemsubtitle">
            Top Tracks
          </p>
          <TrackList entries={this.props.topTracks} />
        </div>;
      }

      return <div>
        <div className="card__itemimage">
          {image}
        </div>
        <div>
          <div className="card__itemname">
            {item.name}
          </div>
          <div className="card__iteminfo">
            <a href={item.url}>Link to LastFM</a>
            <p className="card__itemsubtitle">Biography</p>
            <p className="card__itemsubtitle">Summary</p>
            {item.bio.summary}
            <p className="card__itemsubtitle">Content</p>
            {item.bio.content}
          </div>
        </div>

        {topTracks}
        {topAlbums}
      </div>;
    }
    return null;
  }

  render() {

    var artist = this.showArtist(this.props.entry);

    return (
      <div>
        {artist}
      </div>
    );
  }
};

export default ArtistItem;