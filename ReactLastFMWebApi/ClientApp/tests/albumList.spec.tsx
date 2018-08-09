import {AlbumList} from '../components/Album/AlbumList';
import * as React from 'react';
import { shallow } from 'enzyme';

it('AlbumList renders the text inside it',
  () => {
    const albums = [
      {
        name: 'love',
        url: 'http://',
        image: { }
      },
      {
        name: 'believe',
        url: 'http://',
        image: {}

      }
    ] as Album[];

    const wrapper = shallow(
      <AlbumList entries={albums} />
    );
    const list = wrapper.find('AlbumItem');
    expect(list.length).toBe(2);
  });