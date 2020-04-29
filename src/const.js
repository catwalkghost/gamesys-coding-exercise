import data from './assets/data.json'
import * as f from 'fpx'

export const TITLE = 'You WON a Free Cash Prize!'

export const JSON_DATA = data
export const RETINA_SCREEN = window.devicePixelRatio > 1 || (window.matchMedia && window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)").matches)

export const RETINA_BG = '/assets/bg-2.jpg'
export const NON_RETINA_BG = '/assets/bg.jpg'

export const RETINA_IMG = '/assets/box-bottom-2.png'
export const NON_RETINA_IMG = '/assets/box-bottom.png'

// In this scenario we simply expect JSON file to contain an object
// A more complicated scenario will require checking for specific values
export const CASH_VALUE = f.isObject(JSON_DATA) ? JSON_DATA.value : '10'
export const CTA_URL = f.isObject(JSON_DATA) ? JSON_DATA.url : 'CTA_URL_STRING'

// Note: using a hardcoded fallback in case JSON is malformed.
export const CTA_URL_STRING = 'https://www.starspins.com'

