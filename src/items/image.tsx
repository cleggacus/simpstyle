import * as React from 'react';
import styles from './image.module.scss';

interface Props {
  src?: string;
  children?: string | null;
}

export default (props: Props) => {
  return (
    <img className={styles.image} src={props.src ? props.src : ''}/>
  )
}
