import { Component } from "react";
import * as React from 'react';


interface Props {
  entry: Track;
}


class TrackItem extends Component<Props> {
  props: Props;

  showTrack(item: Track) {
    if (item != null) {
      return (
        <div>
          <p>
            <a href='{item.url}'>{item.name}</a>
            {item.listeners} listeners
          </p>
        </div>);
    }
    return null;
  }

  render() {
    var trackEntry = this.props.entry;

    return (
      <div>

        {this.showTrack(trackEntry)}

      </div>
    );
  }
};

export default TrackItem;