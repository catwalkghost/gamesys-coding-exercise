import React from 'react'
import * as c from '../const'

import * as f from 'fpx'
import * as m from './misc'

// importing data from JSON
import data from '../assets/data.json'

let timerID = null
const jsonData = data

export class Timer extends React.Component {
    // Setting up state variables
    constructor(props) {
        super(props)

        // Default sate is used as a fallback if JSON data doesn't load
        // See componentDidMount for details
        this.state = {
                hours: 0,
                minutes: 3,
                seconds: 0,
                over: false,
        }

        this.onTick = this.onTick.bind(this)

    }

    onTick() {
        const { hours, minutes, seconds, over } = this.state;
        // Stop counter if over
        if (over) {
            return null
        }

        // Time is out
        // This can be done using a less expensive check
        if (hours === 0 && minutes === 0 && seconds === 0) {
            this.setState({ over: true })

        } else if (minutes === 0 && seconds === 0) {
            // Decrement hours
            this.setState({
                hours: hours - 1,
                minutes: 59,
                seconds: 59
            });
        } else if (seconds === 0) {
            // Decrement minutes
            this.setState({
                hours: hours,
                minutes: minutes - 1,
                seconds: 59
            });
        } else {
            // Decrement seconds
            this.setState({
                hours: hours,
                minutes: minutes,
                seconds: seconds - 1
            });
        }
    };

    componentDidMount() {

        // Interval is set on Mounting
        timerID = setInterval(() => this.onTick(), 1000);

        // Accessing timer state from localStorage
        this.timeRemaining = JSON.parse(localStorage.getItem('timeRemaining'))

        // Getting data from localStorage
        if (localStorage.getItem('timeRemaining')) {
            this.setState({
                hours: this.timeRemaining.hours,
                minutes: this.timeRemaining.minutes,
                seconds: this.timeRemaining.seconds,
                over: this.timeRemaining.over
            })
        } else if (f.isObject(jsonData)) {
            const { hours, minutes, seconds} = jsonData
            this.setState({
                hours,
                minutes,
                seconds,
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        // Write state to localStorage
        localStorage.setItem('timeRemaining', JSON.stringify(nextState))
    }

    componentWillUnmount() {
        // Clear interval on unmount
        timerID = null
    }

    render() {
        const {state: { hours, minutes, seconds, over }} = this
        const hoursFormatted   = hours.toString().padStart(2, '0')
        const minutesFormatted = minutes.toString().padStart(2, '0')
        const secondsFormatted = seconds.toString().padStart(2, '0')

        const responsiveBg = c.RETINA_SCREEN ? c.RETINA_BG : c.NON_RETINA_BG
        const responsiveImg = c.RETINA_SCREEN ? c.RETINA_IMG : c.NON_RETINA_IMG

        const value = c.CASH_VALUE
        const url   = c.CTA_URL
        // Using to LocaleString. A function can be made to support local currencies and formats
        const valueFormatted = value.toLocaleString('en-GB', {style: 'currency', currency: 'GBP'})

        return (
            <div className='full-screen row-center-center'>
                    <m.BgImage
                        bgUrl={over ? undefined: responsiveBg}
                        cls={'full-size z-index-lo abs bg-top-center bg-black'} />
                    {over ? null : (
                        // Using position absolute so the image always stays at the top of the tile,
                        // as specified in brief
                        <m.Image
                            alt={c.TITLE}
                            url={responsiveImg}
                            className='top-image'/>
                    )}
                    <div className='container row-center-center relative font-white full-size'>
                        <div className='col-start-center'>
                            {over ? null :(
                                <h3 className='cash-value'>Get your free <span className='font-bold'>{valueFormatted}</span> now!</h3>
                            )}
                            <div className='col-center-center'>
                                <div className='row-center-center font-giant font-black'>
                                    <div className='row-center-center gaps-h-0x5'>
                                    <span>{hoursFormatted}</span>
                                    <span className='counter-separator'>:</span>
                                    <span>{minutesFormatted}</span>
                                    <span className='counter-separator'>:</span>
                                    <span>{secondsFormatted}</span>
                                    </div>
                                </div>
                                {over ? null : (
                                <div className='row-center-center width-100p text-uppercase text-center font-small grid-3'>
                                    <span>Hours</span>
                                    <span>Minutes</span>
                                    <span>Seconds</span>
                                </div>
                                )}
                                <div className='padding-1 width-100p'>
                                    {over ? null : (
                                    <m.Button
                                        externalUrl={url}
                                        buttonText={'Opt in'}/>
                                )}</div>
                            </div>

                        </div>
                    </div>
            </div>
        )
    }
}


