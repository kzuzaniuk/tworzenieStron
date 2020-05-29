import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
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
                        fixed(width: 667, height: 375, quality: 100) {
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
console.log(data)
    /*            image: file(relativePath: {eq: "joel.jpg"}) {
            id
            childImageSharp {
                fluid(maxWidth: 450, quality: 90, traceSVG: {color: "#f3f3f3"}) {
                    ...GatsbyImageSharpFluid
                }
            }
        }*/

    return (
        <Layout>
            <Head title="Portfolio"/>
            <h1>Here's some of my work!</h1>
            <div className={portfolioStyles.galeria}>
                {data.images.nodes.map(image => (
                    <div className={portfolioStyles.images}>
                        <a href="https://dizzymediainc.itch.io/"><Img className={portfolioStyles.image} key={image.id} fixed={image.childImageSharp.fixed}/></a>
                    </div>
                ))}
            </div>
            <h3>Interested in working with me? Check out my <a href="https://www.linkedin.com/in/konrad-zuzaniuk-478717145/" className={portfolioStyles.highlightLink}>CV</a> and <a href="mailto:konrad.zuzaniuk@gmail.com" target="_blank" className={portfolioStyles.highlightLink}>Contact me!</a></h3>
        </Layout>
    )
}

export default PortfolioPage
