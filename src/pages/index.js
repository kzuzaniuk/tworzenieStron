import React from "react"
// import { Link } from "gatsby"

import Layout from './components/layout'
import Head from './components/head'
import Introduction from './components/introduction'
import MainContent from './components/maincontent'
import sciencePhoto from './images/science.png'
import itchPhoto from './images/itch.png'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <Introduction />
            <hr></hr>
            <MainContent title="Featured Project" 
            source={itchPhoto} 
            he="Mystery Project"
            tekst="I'm working on a mysterious project featuring fast and visceral gun combat set in a dark world highly inspired by Dark Souls."
            goto="/portfolio"
            />
            <hr></hr>
            <MainContent title="Blog and Science" 
            source={sciencePhoto}
            he="Blog and Science"
            tekst="Read about my newest scientific discoveries, thoughts, publications and maybe some more personal stuff on my private blog."
            goto="/blog"
            />
        </Layout>
    )
}

export default IndexPage
