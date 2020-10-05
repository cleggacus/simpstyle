import * as React from 'react';
import Generic from './generic';

interface Props {
  style?: 'Generic';
  children?: any;
}

export default (props: Props) => {
  switch(props.style){
    case 'Generic':
      return <Generic>{props.children}</Generic>
    default:
      return <Generic>{props.children}</Generic>
  }
}