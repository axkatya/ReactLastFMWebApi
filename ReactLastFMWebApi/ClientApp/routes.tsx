import * as React from 'react';

import { Layout } from './components/Layout';
import { AlbumSearch }  from './components/Album/AlbumSearch';
import { ArtistSearch }  from './components/Artist/ArtistSearch';
import { NavLink, Switch, Redirect, Route, BrowserRouter } from 'react-router-dom';


export const routes = <Layout>
  <Route exact path="/" component={AlbumSearch} />
  <Route path="/albums" component={AlbumSearch}/>
  <Route path="/artists" component={ArtistSearch} />
  <Route path="/artists(/:artistName)" component={ArtistSearch}/>
</Layout>;
