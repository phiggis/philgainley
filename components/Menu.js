import React from 'react';
import ReactDOM from 'react-dom';
//import './Menu.css';

class Menu extends React.Component {
  render() {
    return (
      <div className="Menu">
      <a href="/about">About</a>

      <a href="/playground">Playground</a>
      <a href="/publications">Publications</a>
      <a href="/contact">Contact</a>
      </div>

    )

}
}

export default Menu;
