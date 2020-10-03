import * as React from 'react';
import styles from './content.module.scss';
import { Switch } from "react-router-dom";

interface Props {
  children?: JSX.Element | JSX.Element[] | null;
}

export default (props: Props) => {
  return (
    <div className={styles.content}>
      <Switch>
        {props.children}
      </Switch>
    </div>
  )
}
