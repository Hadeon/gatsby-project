import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import headerStyles from './header.module.scss';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className={headerStyles.header}>
      <h2>
        <Link to="/" className={headerStyles.title} activeClassName={headerStyles.activeNavItem}>{data.site.siteMetadata.title}</Link>
      </h2>
      <ul className={headerStyles.navList}>
        <li>
          <Link to="/" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Home</Link>
        </li>
        <li>
          <Link to="/blog" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Blog</Link>
        </li>
        <li>
          <Link to="/about" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>About</Link>
        </li>
        <li>
          <Link to="/contact" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Contact</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header;