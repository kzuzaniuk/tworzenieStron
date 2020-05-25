import React from "react"
import Layout from './components/layout'
import { Link } from 'gatsby'
import Head from './components/head'


const AboutMe = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>About Me</h1>
            <p>Here's info about me</p>
            <p>If you liked it, get in touch! <Link to="/contact">Contact me</Link></p>
        </Layout>
    )
}

export default AboutMe