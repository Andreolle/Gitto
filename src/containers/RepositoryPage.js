import React, { Component } from 'react'

import CounterDisplay from '@/components/CounterDisplay'
import CommitList from '@/components/CommitList'

class RepositoryPage extends Component {
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

export default RepositoryPage;