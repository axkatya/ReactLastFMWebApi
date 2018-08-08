import * as React from 'react';
import { TrackItem } from '../Track/TrackItem';

interface Props {
  entries?: Track[] | undefined;
}

export class TrackList extends React.Component<Props, {}> {

  addTrack(item: Track) {
    if (item != null) {
      return <TrackItem entry={item} />;
    }
    return {};
  }

  render() {
    var trackEntries: Track[] | undefined = this.props.entries;

    if (trackEntries != null) {
      var listItems = trackEntries.map(this.addTrack);

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

