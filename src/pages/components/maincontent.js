import React from 'react'
import { Link } from 'gatsby'
import maincontentStyles from './maincontent.module.scss'

const MainContent = (props) => {
    return (
        <div className={maincontentStyles.intro}>
            <h1>{props.title}</h1>
            <div className={maincontentStyles.wrap}>
            <div className={maincontentStyles.wrapper}>
            <img src={props.source}></img>
            <Link to={props.goto} className={maincontentStyles.button}>See more</Link>
            </div>

            <div className={maincontentStyles.tekst}>
            <h3>{props.he}</h3>
            <p>{props.tekst}</p>
            {/* <p>Creating worlds and experiences that impact our culture is my passion.</p>
            <p>I helped bring Rapture to life in the critically acclaimed BioShock series, and made the world dance as design lead on Dance Central. Most recently I sparked the joy of childhood imagination and creativity in Captain Forever Remix as part of a two-person team.</p>
            <p>These days I work at Valve.</p> */}
            </div>
            </div>
        </div>
    )
}

export default MainContent