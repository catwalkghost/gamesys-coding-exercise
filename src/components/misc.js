import React from 'react'

import * as u from '../utils'

export function BgImage({cls, style, bgUrl}) {
        return (
            <div
                style={{...style, backgroundImage: u.bgUrl(bgUrl)}}
                className={u.cls(
                    'row-start-start bg-cover',
                    cls
                )}/>
        )
}

export function Image({style, url, className, alt}) {
        return (
            <img
                className={`${className || ''}`}
                style={style}
                src={url}
                alt={alt} />
        )
}


export function Button({externalUrl, buttonText}) {
        return (
            <a href={externalUrl}>
            <div className='button text-center padding-0x5 text-uppercase '>
                <button>{buttonText}</button>
            </div>
            </a>
        )
}