import React, { Component } from 'react'
import { listCommits } from '@/services/httpRequests/requests'
import githubUser from '@/images/gituser.png'

class CommitList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			commitList: []
		}
	}
	componentDidMount () {
		const url = this.props.repoURL
		listCommits(url).then(res => {
			this.setState({
				commitList: res.data
			})
		})
	}
	render() {
		const commitItem = this.state.commitList.map((item) => (
			<li className="commit" key={item.sha}>
				<strong>{item.commit.message}</strong>

				<div className="commit__committer">
					<div className="commit__committer--avatar">
						<img src={item.author ? item.author.avatar_url: githubUser} alt=""/>
					</div>
					<div className="commit__committer--name">{item.commit.author.name}</div>
				</div>
			</li>
		))

		return (
			<ul className="commit-list">
				{ commitItem }	
			</ul>
		)
	}
}

export default CommitList;