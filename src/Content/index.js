import React from 'react'
import './Content.css'
import Info from '../Info'

export default class Content extends React.Component {
	render() {
		return (
			<div className='content-container'>
				<Info />
			</div>
		)
	}
}