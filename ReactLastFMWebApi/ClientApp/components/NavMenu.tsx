import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
      return <div className="container__tabmenu tablist">
        <NavLink className="tablist__item" activeClassName="tablist__item--active" to="/albums">Albums</NavLink >
        <NavLink className="tablist__item" activeClassName="tablist__item--active" to="/artists">Artists</NavLink >
      </div>;
    }
}
