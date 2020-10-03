import * as React from 'react';
import styles from './generic.module.scss';

interface Props {
  height?: string | number;
  children?: JSX.Element[] | JSX.Element | null;
}

const defaultHeight = '60px';

export default (props: Props) => {
  return (
    <div style={{height: props.height ? props.height : defaultHeight}} className={styles.genericNavbar}>
      {props.children}
    </div>
  )
}
