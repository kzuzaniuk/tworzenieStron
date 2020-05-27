import React from "react"
import { Link } from "gatsby"

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
            <MainContent title="Featured Project" />
            <hr></hr>
            <MainContent title="Blog and Science" />
        </Layout>
    )
}

export default IndexPage
