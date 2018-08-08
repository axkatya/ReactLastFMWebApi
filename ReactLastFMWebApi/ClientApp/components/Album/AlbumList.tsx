import * as React from 'react';
import { AlbumItem } from './AlbumItem';

interface Props {
  entries?: Album[] | undefined;
}

export class AlbumList extends React.Component<Props, {}> {

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
