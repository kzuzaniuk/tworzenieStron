import React from "react"
// import { Link } from "gatsby"

import Layout from './components/layout'
import Head from './components/head'
import Introduction from './components/introduction'
import MainContent from './components/maincontent'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <Introduction />
            <hr></hr>
            <MainContent title="Featured Project" 
            source="https://krytykapolityczna.pl/file/2020/04/keanu-reeves-cyberpunk-2077-johnny-silverhand-1024x574.jpg" 
            he="Cyberpunk 2077"
            tekst="I worked on a storydriven, open world RPG of the dark future from CD PROJEKT RED, creators of The Witcher series of games.(Placeholder)"
            goto="/portfolio"
            />
            <hr></hr>
            <MainContent title="Blog and Science" 
            source="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fedelmanhealthcare%2Ffiles%2F2017%2F09%2FForbes-Byline_Image.jpg"
            he="Blog and Science"
            tekst="Read about my newest scientific discoveries, thoughts, publications and also some other stuff on my private blog.(Placeholder)"
            goto="/blog"
            />
        </Layout>
    )
}

export default IndexPage
