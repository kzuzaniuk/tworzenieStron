import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from './components/layout'
import Head from './components/head'
import Img from 'gatsby-image'
import portfolioStyles from './portfolio.module.scss'

const PortfolioPage = () => {
    const data = useStaticQuery(graphql`
        query Images {
            images: allFile( filter: { relativeDirectory: { eq: "gallery" }}) {
                nodes {
                    id
                    childImageSharp {
                        fixed(width: 700, height: 400, quality: 100) {
                            ...GatsbyImageSharpFixed
                        }
                        fluid(maxWidth: 1280, maxHeight: 720, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    `)

    /*            image: file(relativePath: {eq: "joel.jpg"}) {
            id
            childImageSharp {
                fluid(maxWidth: 450, quality: 90, traceSVG: {color: "#f3f3f3"}) {
                    ...GatsbyImageSharpFluid
                }
            }
        }*/

        console.log(data)
    
    return (
        <Layout>
            <Head title="Portfolio"/>
            <h1>Here's some of my work!</h1>
            <div className={portfolioStyles.galeria}>
                {data.images.nodes.map(image => (
                    <div className={portfolioStyles.images}>
                        <a href="https://dizzymediainc.itch.io/"><Img className={portfolioStyles.image} key={image.id} fluid={image.childImageSharp.fluid} /></a>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export default PortfolioPage
