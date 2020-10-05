import * as React from 'react';
import styles from './index.module.scss';

interface Props {
  children?: any;
  onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
  alignChilderen?: string;
}

export default (props: Props) => {
  return (
    <div onClick={props.onClick} className={styles.navItem}>
      {props.children}
    </div>
  )
}
