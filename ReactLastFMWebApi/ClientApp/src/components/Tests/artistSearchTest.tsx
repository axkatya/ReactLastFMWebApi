import ArtistSearch from '../Artist/ArtistSearch';
import * as React from 'react';
import { shallow } from 'enzyme';

test('ArtistSearch button renders the text', () => {

  const wrapper = shallow(
    <ArtistSearch />
  );

  const buttonText = wrapper.find('button').at(0);
  expect(buttonText.text()).toBe('Search Artist');
});