import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from './footer.module.scss'
import { FaTrademark } from 'react-icons/fa'

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
                <li><a className={footerStyles.navItem} href="mailto:konrad.zuzaniuk@gmail.com" target="_blank">MAIL</a></li>
                <li><a className={footerStyles.navItem} href="https://twitter.com/Konrad_Zuzaniuk" target="_blank">TWITTER</a></li>
                <li><a className={footerStyles.navItem} href="https://github.com/kzuzaniuk" target="_blank">GITHUB</a></li>
                <li><a className={footerStyles.navItem} href="https://www.linkedin.com/in/konrad-zuzaniuk-478717145/" target="_blank">LINKEDIN</a></li>
                <li><a className={footerStyles.navItem} href="https://kunobis.itch.io/" target="_blank">ITCH.IO</a></li>
            </ul>
            <p>Developed by {data.site.siteMetadata.author}<FaTrademark /></p> 
        </footer>
    )
}

export default Footer