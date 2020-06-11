import React from "react"
import Layout from './components/layout'
import { Link } from 'gatsby'
import Head from './components/head'
import aboutStyles from './about.module.scss'
import { FaTwitter, FaLinkedinIn, FaGithub, FaMailBulk, FaGamepad } from 'react-icons/fa';
import myFace from "./images/kz.png"


const AboutMe = () => {
    return (
        <Layout>
            <Head title="Skills" />
            <article className={aboutStyles.intro}>
            <div className={aboutStyles.wrap}>
            <div className={aboutStyles.wrapper}>
            <img src={myFace} alt="aboutimage"></img>
                <nav className={aboutStyles.lista}>
                    <ul className={aboutStyles.navList}>
                    <li className={aboutStyles.navItem}><a href="https://twitter.com/Konrad_Zuzaniuk" target="_blank" rel="noreferrer"><FaTwitter /></a></li>
                        <li className={aboutStyles.navItem}><a href="https://www.linkedin.com/in/konrad-zuzaniuk-478717145/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a></li>
                        <li className={aboutStyles.navItem}><a href="https://github.com/kzuzaniuk" target="_blank" rel="noreferrer"><FaGithub /></a></li>
                        <li className={aboutStyles.navItem}><a href="mailto:konrad.zuzaniuk@gmail.com" target="_blank" rel="noreferrer"><FaMailBulk /></a></li>
                        <li className={aboutStyles.navItem}><a href="https://kunobis.itch.io/" target="_blank" rel="noreferrer"><FaGamepad /></a></li>
                    </ul>
                </nav>
            </div>

            <div className={aboutStyles.tekst}>
            <p><strong>Skills:</strong></p>
            <p>Langauges: C++/C#/Python/JavaScript</p>
            <p>Engines/Frameworks: Unreal Engine 4, Unity, Node.js, Gatsby</p>
            <p>Tools: Figma, Wwise, Git & Github, Trello, Blender</p>
            <p>Fields: User Interface, Gameplay, Animation, 3D Scultping</p>
            <a className={aboutStyles.Linked} href="https://www.linkedin.com/in/konrad-zuzaniuk-478717145/"><div className={aboutStyles.foo}></div>linkedin</a>
            </div>
            </div>
        </article>
        <h3>Check out my <Link className={aboutStyles.highlightLink} to="/portfolio">Portfolio</Link> and my <a href="https://lizaniesciany.pl"className={aboutStyles.highlightLink}>Gaming Blog</a></h3>
            {/* <h3>If you liked it, get in touch! <a href="https://twitter.com" target="_blank" rel= "noopener noreferrer" >Twitter @Konrad_Zuzaniuk</a></h3> */}
        </Layout>
    )
}

export default AboutMe