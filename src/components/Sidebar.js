import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
  <nav className="sidebar">
    <div className="sidebar__header">
      <h2 className="sidebar__header--title">Nome do Perfil</h2>
      <h3 className="sidebar__header--subtitle">Projetos</h3>
    </div>
    <ul className="sidebar__nav">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    <div className="sidebar__actionbar">
      <FontAwesomeIcon icon={faChevronCircleLeft} />
    </div>
  </nav>
  );

Sidebar.propTypes = {};

export default Sidebar;