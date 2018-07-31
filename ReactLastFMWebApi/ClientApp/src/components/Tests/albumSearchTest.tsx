import AlbumSearch from '../Album/AlbumSearch';
import * as React from 'react';
import { shallow } from 'enzyme';

test('AlbumSearch renders the text', () => {
 
  const wrapper = shallow(
    <AlbumSearch  />
  );

  const buttonText = wrapper.find('button').at(0);
  expect(buttonText.text()).toBe('Search Album');
});