import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, faStar, faEye } from '@fortawesome/free-solid-svg-icons'

class CounterDisplay extends Component {
	render() {
        return (
            <div className="repository-page__counter">
                <div className="repository-page__counter--item">
                    <div className="counter">
                        <span>7</span>
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <p className="description">Stars</p>
                </div>
            
                <div className="repository-page__counter--item">
                    <div className="counter">
                        <span>7</span>
                        <FontAwesomeIcon icon={faCodeBranch} />
                    </div>
                    <p className="description">Forks</p>
                </div>
            
                <div className="repository-page__counter--item">
                    <div className="counter">
                        <span>7</span>
                        <FontAwesomeIcon icon={faEye} />
                    </div>
                    <p className="description">Watchers</p>
                </div>
            </div>
        )
    }
}

export default CounterDisplay;