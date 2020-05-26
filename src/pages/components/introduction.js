import React from 'react'
import { Link } from 'gatsby'
import introductionStyles from './introduction.module.scss'
import { FaTwitter, FaLinkedinIn, FaGithub, FaMailBulk, FaGamepad } from 'react-icons/fa';

const Introduction = () => {
    return(
        <article className={introductionStyles.intro}>
            <h1>Hello!</h1>
            <div className={introductionStyles.wrap}>
            <div className={introductionStyles.wrapper}>
            <img src="https://avatarfiles.alphacoders.com/111/thumb-111799.png"></img>
                <nav className={introductionStyles.lista}>
                    <ul className={introductionStyles.navList}>
                        <li className={introductionStyles.navItem}><FaTwitter /></li>
                        <li className={introductionStyles.navItem}><FaLinkedinIn /></li>
                        <li className={introductionStyles.navItem}><FaGithub /></li>
                        <li className={introductionStyles.navItem}><FaMailBulk /></li>
                        <li className={introductionStyles.navItem}><FaGamepad /></li>
                    </ul>
                </nav>
            </div>
            <p>I'm <Link to="/about"><strong>Konrad Zuzaniuk</strong></Link>. 
            I am a level and game designer, artist, creative collaborator, writer and storyteller with 16 years experience making games.
            Creating worlds and experiences that impact our culture is my passion.
            I helped bring Rapture to life in the critically acclaimed BioShock series, and made the world dance as design lead on Dance Central. Most recently I sparked the joy of childhood imagination and creativity in Captain Forever Remix as part of a two-person team.
            These days I work at Valve.</p>

            {/* PODZIELIĆ NA WIĘCEJ PARAGRAFÓW */}
            </div>
            <h3>Got an interesting project? Send me a message at konrad.zuzaniuk@gmail.com</h3>
            
        </article>
    )
}

export default Introduction