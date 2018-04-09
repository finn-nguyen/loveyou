import React from 'react'
import Counter from '../Counter'
import './Info.css'

export default class Info extends React.Component {
	render() {
		return (
			<div className='info-container'>
				<div className='left'>
				It does not matter how many years pass by. Our love will last forever. I love you.
				</div>
				<div className='right'><Counter /></div>
			</div>
		)
	}
}