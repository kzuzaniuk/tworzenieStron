import React from 'react'
import { Link } from 'gatsby'
import maincontentStyles from './maincontent.module.scss'

const MainContent = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}

export default MainContent