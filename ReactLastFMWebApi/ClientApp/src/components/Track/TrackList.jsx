import { Component } from "react";
import * as React from 'react';
import TrackItem from "../Track/TrackItem";

interface Props {
  entries: Track[];
}

class TrackList extends Component<Props> {
  props: Props;

  addTrack(item: Track) {
    if (item != null) {
      return <TrackItem entry={item} />;
    }
    return {};
  }

  render() {
    var trackEntries = this.props.entries;

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

export default TrackList;