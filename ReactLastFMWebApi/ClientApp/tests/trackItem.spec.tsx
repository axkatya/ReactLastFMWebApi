import { TrackItem } from '../components/Track/TrackItem';
import * as React from 'react';
import { shallow } from 'enzyme';

it('TrackItem renders the text inside it', () => {
  const track = ({
    name: 'love',
    url: 'http://',
    listeners: 20
  }) as Track;

  const wrapper = shallow(
    <TrackItem entry={track} />
  );
  const p = wrapper;
  expect(p.text()).toBe('love20 listeners');
});