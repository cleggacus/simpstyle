import React, { useEffect } from 'react';
import Theme from './interfaces/theme';
import themes from './themes';
import setTheme from './utils/setTheme';
import styles from './simp.module.scss';

import { BrowserRouter } from "react-router-dom";

interface Props {
  theme?: Theme;
  children?: JSX.Element[] | JSX.Element | null;
}

export default (props: Props) => {
  useEffect(() => {
    setTheme(props.theme ? props.theme : themes.dracula);
  }, []);

  return (
    <div className={styles.simp}>
      <BrowserRouter>
        {props.children}
      </BrowserRouter>
    </div>
  )
}
