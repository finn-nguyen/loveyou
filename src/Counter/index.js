import React from 'react'
import { formatTwoDigit } from '../utils.js'
import './Counter.css'

const CounterItem = (props) => {
	const { number, label } = props
	return (
		<span className='counter-item'>
			<div className='number'>{formatTwoDigit(number)}</div>
			<div className='label'>{label}</div>
		</span>
	)
}

export default class Counter extends React.Component {

	startTime = new Date('2012-02-09T00:00:00Z')
	interval = null

	state = {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	}

	componentDidMount() {
		this.interval = setInterval(this.updateTime, 1000)
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}

	updateTime = () => {
		const now = Date.now()
		const time = now - this.startTime
		const total = Math.round(time/1000)
		const days = Math.floor(total/60/60/24)
		const hours = Math.floor(total/60/60) - (days * 24)
		const minutes = Math.floor(total/60) - ( days * 24 * 60 + hours * 60)
		const seconds = total % 60
		this.setState({
			days,
			hours,
			minutes,
			seconds
		})
	}

	render() {
		const { days, hours, minutes, seconds } = this.state
		return (
			<div className='counter-container'>
				<span className='counter-row-first'>
					<CounterItem number={days} label='Days' />
					<CounterItem number={hours} label='Hours' />
				</span>
				<span className='counter-row-second'>
					<CounterItem number={minutes} label='Minutes' />
					<CounterItem number={seconds} label='Seconds' />
				</span>
			</div>
		)
	}
}