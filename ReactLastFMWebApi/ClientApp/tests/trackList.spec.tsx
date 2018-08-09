import { TrackList } from '../components/Track/TrackList';
import * as React from 'react';
import { shallow } from 'enzyme';

it('TrackList renders the text inside it',
  () => {
    const tarcks = [
      {
        name: 'love',
        url: 'http://',
        listeners: 30
      },
      {
        name: 'believe',
        url: 'http://',
        listeners: 20
      }
    ] as Track[];

    const wrapper = shallow(
      <TrackList entries={tarcks} />
    );
    const list = wrapper.find('TrackItem');
    expect(list.length).toBe(2);
  });