import React from 'react'
import { Link } from 'gatsby'
import introductionStyles from './introduction.module.scss'

const Introduction = () => {
    return(
        <article className={introductionStyles.intro}>
            <h1>Hello!</h1>
            <div>
            <p><img src="https://i1.sndcdn.com/artworks-000161908486-comet0-t500x500.jpg"></img>I'm <Link to="/about"><strong>Konrad Zuzaniuk</strong></Link>, 
            a cognitive sciencist and a video game enthusiast aspiring to become a game developer</p>
            </div>
            <h3>Got an interesting project? Send me a message at konrad.zuzaniuk@gmail.com </h3>
            
        </article>
    )
}

export default Introduction