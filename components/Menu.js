

import React, { useState } from "react";
import ReactDOM from 'react-dom';
import Link from 'next/link'

import { createMemoryHistory } from 'history'

const history = createMemoryHistory()

import { NavLink, Router } from 'react-router-dom'
import { useRouter } from 'next/router'
//import './Menu.css';
// https://reactrouter.com/web/api/NavLink
// https://www.codementor.io/@packt/using-the-link-and-navlink-components-to-navigate-to-a-route-rieqipp42
// https://reactrouter.com/web/api/NavLink

//      <Router>
class Menu extends React.Component {
  render() {
    return (
      <div className="section">

              <Link href="/about" activeClassName="selected">About</Link>
              <Link href="/blog" activeClassName="selected">Blog</Link>
              <Link href="/playground" activeClassName="selected">Playground</Link>
             <Link href="/publications" activeClassName="selected">Publications</Link>
              <Link href="/contact" activeClassName="selected">Contact</Link>

      {/*
      <Router history={history}>
              <NavLink to="/about" activeClassName="selected">About</NavLink>
              <NavLink to="/blog" activeClassName="selected">Blog</NavLink>
              <NavLink to="/playground" activeClassName="selected">Playground</NavLink>
             <NavLink to="/publications" activeClassName="selected">Publications</NavLink>
              <NavLink to="/contact" activeClassName="selected">Contact</NavLink>
</Router>
*/}
              </div>
    )
}
}

export default Menu;
