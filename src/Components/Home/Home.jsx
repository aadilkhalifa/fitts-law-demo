import './Home.scss'

import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div className="homeDiv">
            <Link to={'/demo'}>Start demo</Link>
        </div>
    )
}

export default Home
