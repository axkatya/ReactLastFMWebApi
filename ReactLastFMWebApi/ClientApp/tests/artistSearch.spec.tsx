import {ArtistSearch} from '../components/Artist/ArtistSearch';
import * as React from 'react';
import { shallow, mount, render } from 'enzyme';

it('ArtistSearch button renders the text', function() {

  const wrapper = shallow(
    <ArtistSearch />
  );

  const buttonText = wrapper.find('button').at(0);
  expect(buttonText.text()).toBe('Search Artist');
});