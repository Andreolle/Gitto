import React, { Component } from 'react'

import CounterDisplay from '@/components/CounterDisplay'
import CommitList from '@/components/CommitList'
import store from '@/store'

class RepositoryPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			info: []
		}
		
		store.subscribe(() => {
			const { repoName } = this.props.match.params
			this.setState({
				info: store.getState().listReducer.filter((list) => list.name === repoName)
			})
		})
	}
	componentWillReceiveProps(newProps) {
		const repoName = newProps.url.replace('/', '')
		this.setState({
			info: store.getState().listReducer.filter((list) => list.name === repoName)
		})
	}

	render() {
		const repo = this.state.info.map((item) => (
			<div className="container" key={item.name}>
				<div className="repository-page__header">
					<div className="repository-page__header--title">
						<h1>{item.name}</h1>
						<p>{item.description}</p>
					</div>

					<CounterDisplay stars={item.starsCount} forks={item.forkCount} />						
				</div>

				<div className="repository-page__body">
					<CommitList repoURL={item.fullName} />
				</div>
			</div>
		))
		return (
			<div className="repository-page">{repo}</div>
		)
	}
}

export default RepositoryPage