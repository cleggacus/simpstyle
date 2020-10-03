import * as React from 'react';
import styles from './link.module.scss';
import { Link } from "react-router-dom";

interface Props {
  to?: string;
  children?: string | null;
}

export default (props: Props) => {
  return (
    <Link className={styles.link} to={props.to ? props.to : ''}>
      {props.children}
    </Link>
  )
}
