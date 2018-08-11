import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true
    }

    this.toggleMenu = this.toggleMenu.bind(this);
  }
  
  toggleMenu () {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }

  render() {
    return (
      <nav className={`sidebar ${(this.state.isOpen ? 'open' : 'close')}`}>
        <div className="sidebar__header">
          <div className="sidebar__header--title">
            <h2 className="orgName">Nome do Perfil</h2>
            <h3 className="subtitle">Projetos</h3>
          </div>
          <div className="sidebar__header--avatar">
            <img src="https://avatars3.githubusercontent.com/u/19934823?s=200&v=4" alt=""/>
          </div>
        </div>
        <ul className="sidebar__nav">
            <li>Andreolle de Sousa Dantas 1</li>
            <li>Pedro de Sousa Dantas</li>
            <li>Paulo Araujo Dantas</li>
        </ul>
        <div className="sidebar__actionbar">
          <FontAwesomeIcon onClick={this.toggleMenu} className="sidebar__actionbar--toggleButton" icon={faChevronCircleLeft} />
        </div>
      </nav>
    )
  }
}

Sidebar.propTypes = {};

export default Sidebar;