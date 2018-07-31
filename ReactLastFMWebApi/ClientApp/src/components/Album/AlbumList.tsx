import { Component } from "react";
import * as React from 'react';
import AlbumItem from "../Album/AlbumItem";

interface Props {
  entries: Album[];
}

class AlbumList extends Component<Props> {
  props: Props;

  addAlbum(item: Album) {
    if (item != null) {
      return <AlbumItem entry={item} />;
    }
    return null;
  }

  render() {
    var albumEntries = this.props.entries;

    if (albumEntries != null) {
      var listItems = albumEntries.map(this.addAlbum);

      return (
        <div className="container__list">

          {listItems}

        </div>
      );
    } else {
      return null;
    }
  }
};

export default AlbumList;