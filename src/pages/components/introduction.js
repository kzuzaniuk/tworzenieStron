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
            <img src="https://avatarfiles.alphacoders.com/111/thumb-111799.png" alt="introimage"></img>
                <nav className={introductionStyles.lista}>
                    <ul className={introductionStyles.navList}>
                        <li className={introductionStyles.navItem}><a href="https://twitter.com/Konrad_Zuzaniuk" target="_blank" rel="noreferrer"><FaTwitter /></a></li>
                        <li className={introductionStyles.navItem}><a href="https://www.linkedin.com/in/konrad-zuzaniuk-478717145/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a></li>
                        <li className={introductionStyles.navItem}><a href="https://github.com/kzuzaniuk" target="_blank" rel="noreferrer"><FaGithub /></a></li>
                        <li className={introductionStyles.navItem}><a href="mailto:konrad.zuzaniuk@gmail.com" target="_blank" rel="noreferrer"><FaMailBulk /></a></li>
                        <li className={introductionStyles.navItem}><a href="https://kunobis.itch.io/" target="_blank" rel="noreferrer"><FaGamepad /></a></li>
                    </ul>
                </nav>
            </div>

            <div className={introductionStyles.tekst}>
            <p>My name is <Link className={introductionStyles.highlightLink} to="/about"><strong>Konrad Zuzaniuk</strong></Link></p>
            <p>I am a level and game designer, artist, creative collaborator, writer and storyteller with 16 years experience making games.</p>
            <p>Creating worlds and experiences that impact our culture is my passion.</p>
            <p>I helped bring Rapture to life in the critically acclaimed BioShock series, and made the world dance as design lead on Dance Central. Most recently I sparked the joy of childhood imagination and creativity in Captain Forever Remix as part of a two-person team.</p>
            <p>These days I work at Valve.</p>
            </div>
            </div>
            <h3>Got an interesting project? Send me a <a href="mailto:konrad.zuzaniuk@gmail.com" target="_blank" rel="noreferrer" className={introductionStyles.highlightLink}>message</a></h3>

        </article>
    )
}

export default Introduction