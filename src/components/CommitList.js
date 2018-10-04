import React, { Component } from 'react'
import { listCommits } from '@/services/httpRequests/requests'
import githubUser from '@/images/gituser.png'

class CommitList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			commitList: [],
			commitListNext: [],
			page: 1,
			showMoreBtn: true
		}
		
		this.nextPage = this.nextPage.bind(this);
	}

	nextPage () {
		this.setState(prevState => ({
			page: prevState.page+1
		}))
	}

	componentDidMount () {
		const url = this.props.repoURL
		listCommits(url).then(res => {
			this.setState({
				commitList: res.data
			})
		})

		listCommits(url, '?page=2').then(res => {
			if (res.data.length === 0) {
				this.setState(prevState => ({
					showMoreBtn: false
				}))
			}
		}).catch(err => console.log(err))
	}

	componentDidUpdate(nextProps, nextState) {
		const url = nextProps.repoURL
		let commitList = this.state.commitList

		listCommits(url, `?page=${nextState.page}`).then(res => {
			if (res.data.length !== 0) {
				res.data.map(e => {
					this.setState({
						commitList: [e]
					})
				})
			} else {
				this.setState(prevState => ({
					showMoreBtn: false
				}))	
			}
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
			<div className="commit-container">
				<ul className="commit-list">
					{ commitItem }
				</ul>
				
				<div onClick={this.nextPage} className={`show-more ${!this.state.showMoreBtn ? 'hide' : ''}`}>Ver mais</div>
			</div>
		)
	}
}

export default CommitList;