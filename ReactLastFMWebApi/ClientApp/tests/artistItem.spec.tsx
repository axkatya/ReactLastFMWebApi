import { ArtistItem } from '../components/Artist/ArtistItem';
import * as React from 'react';
import { shallow, mount } from 'enzyme';

it('ArtistItem renders the text inside it', () => {
  const artist = ({ 
    name: 'Cher',
    url: 'http://',
    image: {}
    , bio: {published:'', summary: 'summary 1123425', content: 'content235456'}}) as Artist;

  const topAlbums = [
    {
      name: 'love',
      url: 'http://',
      image: {}
    },
    {
      name: 'believe',
      url: 'http://',
      image: {}

    }
  ] as Album[];

  const topTracks = [
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
    <ArtistItem entry={artist} topAlbums={topAlbums} topTracks={topTracks}/>
  );
  const p = wrapper.find('.card__itemname');
  expect(p.text()).toBe('Cher');
});