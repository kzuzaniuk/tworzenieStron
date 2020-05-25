import React from "react"

import Layout from './components/layout'
import Head from './components/head'

const ContactMe = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>Contact</h1>
            <p>Here's my Twitter, DM me! <a href="https://twitter.com" target="_blank" rel= "noopener noreferrer" >Twitter @Konrad_Zuzaniuk</a></p>
        </Layout>
    )
}

export default ContactMe