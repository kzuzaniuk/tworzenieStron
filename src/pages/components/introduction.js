import React from 'react'
import { Link } from 'gatsby'
import introductionStyles from './introduction.module.scss'
import { FaTwitter, FaLinkedinIn, FaGithub, FaMailBulk, FaGamepad } from 'react-icons/fa';
import myFace from "../images/kz.png"


const Introduction = () => {
    return(
        <article className={introductionStyles.intro}>
            <h1>Hello!</h1>
            <div className={introductionStyles.wrap}>
            <div className={introductionStyles.wrapper}>
            <img src={myFace} alt="introimage"></img>
            {/* <Img></Img> */}
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
            <p>I am a student of "Cognitive science and communication" master's program and an aspiring game designer, artist, writer, storyteller and director eager to learn new things.</p>
            <p>Video games, coding and design is my passion, which I do on the side when I'm not studying.</p>
            <p>Currently I'm working on developing my skills and a project that's not ready to show yet.</p>
            {/* <p>These days I work at Valve.</p> */}
            </div>
            </div>
            <h3>Got an interesting project? Send me a <a href="mailto:konrad.zuzaniuk@gmail.com" target="_blank" rel="noreferrer" className={introductionStyles.highlightLink}>message</a></h3>

        </article>
    )
}

export default Introduction