import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import { listRepos } from '@/services/httpRequests/requests'

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
      repos: [],
      orgName: '',
      orgAvatar: ''
    }

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount() {
    listRepos().then(res => {
      const repos = res.data
      const orgName = res.data[0].owner.login
      const orgAvatar = res.data[0].owner.avatar_url
      
      this.setState({ repos })
      this.setState({ orgName })
      this.setState({ orgAvatar })
    })
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
            <h2 className="orgName">{this.state.orgName}</h2>
            <h3 className="subtitle">Projetos</h3>
          </div>
          <div className="sidebar__header--avatar">
            <img src={this.state.orgAvatar} alt=""/>
          </div>
        </div>
        <ul className="sidebar__nav">
          {this.state.repos.map(repo =>
            <li key={ repo.id }>
              <Link to={{ pathname: `/${ repo.name }` }}>
                { repo.name }
              </Link>
            </li>
          )}
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