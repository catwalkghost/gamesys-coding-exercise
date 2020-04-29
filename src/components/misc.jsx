import React from 'react'

import * as u from '../utils'

export class BgImage extends React.Component {
    render() {
        const {cls, style, bgUrl} = this.props
        return (
            <div
                style={{...style, backgroundImage: u.bgUrl(bgUrl)}}
                className={u.cls(
                    'row-start-start bg-cover',
                    cls
                )}/>
        )
    }
}

export class Image extends React.Component {
    render() {
        const {style, url, className} = this.props
        return (
            <img
                className={`${className || ''}`}
                style={style}
                src={url}
                alt='image-preview' />
        )
    }
}


export class Button extends React.Component {
    render(){
        const {externalUrl, buttonText} = this.props
        return (
            <a href={externalUrl}>
            <div className='button text-center padding-0x5 text-uppercase '>
                <button>{buttonText}</button>
            </div>
            </a>
        )
    }
}