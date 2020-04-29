import React from "react";
import { hot } from "react-hot-loader"

// Helmet is used for setting title and meta. Can be handy for setting OpenGrpah tags too.
import {Helmet} from 'react-helmet'

import * as c from './const'
import * as cdt from './components/countdown-timer'

import './styles/main.scss'

class App extends React.Component {

    render(){
        return (
            <>
                <Helmet defaultTitle={c.TITLE} />
                <cdt.Timer />
            </>

        )
    }
}

// Using hot loading
export default hot(module)(App);