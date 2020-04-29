import React from 'react'

import * as f from 'fpx'

// Checks and sets url for background images
export function bgUrl(url) {
    url = f.onlyString(url)
    if (!url) return undefined
    return `url("${url}")`
}

// Joins className strings
export function cls() {
    return f.filter(arguments, isNonEmptyString).join(' ')
}

// Checks if a string not empty
export function isNonEmptyString(value) {
    return f.isString(value) && value.trim() !== ''
}