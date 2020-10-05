import * as React from 'react';
import styles from './icon.module.scss';

interface Props {
  size?: string;
  children?: any;
}

export default (props: Props) => {
  return (
    <div style={{width: props.size ? props.size : '35px', height: props.size ? props.size : '35px'}} className={styles.icon}>
      {props.children}
    </div>
  )
}
