import React from "react"
import { Link } from "gatsby"

import Layout from './components/layout'
import Head from './components/head'
import Introduction from './components/introduction'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <Introduction />
        </Layout>
    )
}

export default IndexPage
