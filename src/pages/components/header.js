import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"

//import './header.module.scss'
import headerStyles from './header.module.scss'


const Header = () => {

    const data = useStaticQuery(graphql`
query {
    site {
        siteMetadata {
            author
        }
    }
}
`)

    return (
        <header className={headerStyles.header}>
        <h1><Link className={headerStyles.title} to="/">{data.site.siteMetadata.author}</Link></h1>
            <nav>
                <ul className={headerStyles.navList}>
                <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link></li>
                <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link></li>
                <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">Skills</Link></li>
                <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/portfolio">Portfolio</Link></li>
                {/* <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">CV</Link></li> */}
                </ul>
            </nav>
        </header>
    )
}

export default Header