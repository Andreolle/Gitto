import React, { Component } from 'react'

import CounterDisplay from '@/components/counterDisplay'

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
						<ul className="commit-list">
							<li className="commit">
								<strong>Commit message Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, quibusdam.</strong>

								<div className="commit__committer">
									<div className="commit__committer--avatar">
										<img src="#" alt=""/>
									</div>
									<div className="commit__committer--name">Andreolle</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default RepositoryPage;