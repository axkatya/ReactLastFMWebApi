import * as React from 'react';


interface Props {
  entry: Track;
}

export class TrackItem extends React.Component<Props, {}> {

  showTrack(item: Track | undefined) {
    if (item != null && item!= undefined) {
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
    var trackEntry: Track | undefined = this.props.entry;

    return (
      <div>

        {this.showTrack(trackEntry)}

      </div>
    );
  }
};
