import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import RepositoryPage from './containers/RepositoryPage';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { listRepos } from '@/services/httpRequests/requests'

import { connect } from 'react-redux'
import repoList from '@/actions/repoList'

class App extends Component {
  componentDidMount() {
    listRepos().then(res => {
      let list = []
      const localList = localStorage.getItem('listRepositories')

      if (localList) {
        list = JSON.parse(localList)
      } else {
        res.data.map((item, index ) => {
          return (
            list.push(
              {
                name: item.name,
                fullName: item.full_name,
                description: item.description,
                watchersCount: item.watchers_count,
                starsCount: item.stargazers_count,
                forkCount: item.forks,
                ownerAvatar: item.owner.avatar_url
              }
            )
          )
        })
      }

      localStorage.setItem('listRepositories', JSON.stringify(list))
      this.props.dispatch(repoList.list(list))
    })
  }
  render() {
    return (
      <BrowserRouter>
        <div className="app">
            <Sidebar />
            <Switch>
              <Route path='/:repoName' component={RepositoryPage}/>
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(store => {
  return { repoList: store }
})(App)
