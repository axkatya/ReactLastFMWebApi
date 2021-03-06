import { AlbumItem } from '../components/Album/AlbumItem';
import * as React from 'react';
import { shallow } from 'enzyme';

it('AlbumItem renders the text inside it', () => {
  const album = ({
    name: 'love',
    url: 'http://',
    image: {}

  }) as Album;

  const wrapper = shallow(
    <AlbumItem entry={album} />
  );
  const p = wrapper.find('.card__itemname');
  expect(p.text()).toBe('love');
});