import React from "react"

import Layout from './components/layout'
import Head from './components/head'

const ContactMe = () => {
    return (
        <Layout>
            <Head title="CV" />
            <h1>CV</h1>
            <p>Here will be my CV <a href="https://twitter.com" target="_blank" rel= "noopener noreferrer" >Twitter @Konrad_Zuzaniuk</a></p>
        </Layout>
    )
}

export default ContactMe