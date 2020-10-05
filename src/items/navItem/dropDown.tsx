import * as React from 'react';
import styles from './index.module.scss';

interface Props {
  align?: 'left' | 'right' | 'center';
  children?: any;
}

export default (props: Props) => {
  const getAlign = () => {
    return (props.align == 'left')  ? {left: 0, borderRadius: '0 0 12px 0', borderWidth: '0 var(--border-width) var(--border-width) 0'}  : 
           (props.align == 'right') ? {right: 0, borderRadius: '0 0 0 12px', borderWidth: '0 0 var(--border-width) var(--border-width)'} :
           {alignSelf: 'center', borderRadius: '12px', borderWidth: '0 var(--border-width) var(--border-width) var(--border-width)'};
  }

  return (
    <div style={getAlign()} className={styles.dropDown}>
      {props.children}
    </div>
  )
}
