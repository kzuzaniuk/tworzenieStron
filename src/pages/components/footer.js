import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query{
            site {
                siteMetadata {
                    author
                 }
            }
         }
    `)

    return (
        <footer className={footerStyles.footer}>
            <ul className={footerStyles.navList}>
                <li className={footerStyles.navItem}>MAIL</li>
                <li className={footerStyles.navItem}>TWITTER</li>
                <li className={footerStyles.navItem}>GITHUB</li>
                <li className={footerStyles.navItem}>LINKEDIN</li>
                <li className={footerStyles.navItem}>ITCH.IO</li>
            </ul>
            <p>Developed by {data.site.siteMetadata.author}</p>
        </footer>
    )
}

export default Footer