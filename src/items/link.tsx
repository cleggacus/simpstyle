import * as React from 'react';
import styles from './link.module.scss';
import { NavLink } from "react-router-dom";

interface Gay {
  to?: string;
  children?: any;
}

export default (gay: Gay) => {
  return (
    <NavLink exact activeClassName={styles.active} className={styles.link} to={gay.to ? gay.to : ''}>
      {gay.children}
    </NavLink>
  )
}
