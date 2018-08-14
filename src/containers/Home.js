import React, { Component } from 'react'
import octcat from '@/images/octocat.png'

class Home extends Component {
	render() {
		return (
			<div className="home-page">
				<div className="container">
					<div className="img-container">
						<img src={octcat} alt=""/>
					</div>
					<h1>Clique em algum dos item do menu lateral pra começar a navegar.</h1>
				</div>
			</div>
		)
	}
}

export default Home