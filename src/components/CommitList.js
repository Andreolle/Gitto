import React, { Component } from 'react'

class CommitList extends Component {
	render() {
		return (
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
		)
	}
}

export default CommitList;