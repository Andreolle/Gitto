import React, { Component } from 'react'

import CounterDisplay from '@/components/CounterDisplay'
import CommitList from '@/components/CommitList'

import { connect } from 'react-redux'
import activeItem from '@/actions/activeItem'
import store from '@/store'

class RepositoryPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			repoInfo: []
		}
	}
	componentDidUpdate () {
		const { repoName } = this.props.match.params
		let info = store.getState().listReducer.filter((list) => list.name === repoName)
		console.log(info)
	}
	componentDidMount () {
		// store.subscribe((batata) => {
		// 	let info = store.getState().listReducer.filter((list) => list.name === "asgard-api-plugin-metrics-mesos")
		// 	console.log(info)
		// })
	}
	render() {
		return (
			<div className="repository-page">
				<div className="container">
					<div className="repository-page__header">
						<div className="repository-page__header--title">
							<h1>Nome do Repositório</h1>
							<p>Descrição</p>
						</div>

						<CounterDisplay />						
					</div>

					<div className="repository-page__body">
						<CommitList />
					</div>
				</div>
			</div>
		)
	}
}

// export default RepositoryPage;

export default connect(store => {
  return { repoInfo: store }
})(RepositoryPage)