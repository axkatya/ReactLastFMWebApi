import React, { Component } from 'react';
import { NavLink, Switch, Redirect, Route } from 'react-router-dom';
import AlbumSearch from "./components/Album/AlbumSearch";
import ArtistSearch from "./components/Artist/ArtistSearch";

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <div>
        <h1>Last FM</h1>

        <div className="container__tabmenu tablist">
          <NavLink className="tablist__item" activeClassName="tablist__item--active" to="/albums">Albums</NavLink >
          <NavLink className="tablist__item" activeClassName="tablist__item--active" to="/artists">Artists</NavLink >
        </div>
        <Switch>
          <Route exact path="/" component={AlbumSearch} />
          <Route path="/albums" component={AlbumSearch}></Route>
          <Route path="/artists" component={ArtistSearch}></Route>
          <Route path="/artists(/:artistName)" component={ArtistSearch}></Route>
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}
