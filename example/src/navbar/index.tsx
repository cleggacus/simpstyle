import React, { SetStateAction, Dispatch } from 'react'
import { UserAstronaut } from '@styled-icons/fa-solid';
import { Settings } from '@styled-icons/material';
import { Logout } from '@styled-icons/heroicons-solid';
import { Moon } from '@styled-icons/boxicons-solid';
import { CloudFill } from '@styled-icons/bootstrap';
import { Sun } from '@styled-icons/evaicons-solid';

import {
  Link,
  Navbar,
  Seperator,
  DropDown,
  NavItem,
  Icon,
  Themes,
  Theme
} from 'simpstyle';

import 'simpstyle/dist/index.css';

interface Props {
  setTheme: Dispatch<SetStateAction<Theme>>;
  theme: Theme;
}

export default (props: Props) => {
  const toggleState = () => {
    props.setTheme(
      props.theme == Themes.light ? Themes.dracula :
      props.theme == Themes.dracula ? Themes.oled :
      Themes.light
    )
  }

  return (
    <div>
      <Navbar>
        <h2>SimpStyle</h2>
        <Seperator/>

        <NavItem><Link to="/">Home</Link></NavItem>
        <NavItem><Link to="/dash">Dash</Link></NavItem>
        <NavItem><Link to="/about">About</Link></NavItem>

        <Seperator/>

        <input style={{width: "250px"}} type='text' placeholder='search' />

        <NavItem>
          <Link to="/Login">
              <Icon><UserAstronaut/></Icon>
          </Link>

          <DropDown align="right">
            <NavItem>
              <Icon><UserAstronaut/></Icon>
              User
            </NavItem>

            <NavItem onClick={() => toggleState()}>
              <Icon>
              {
                props.theme == Themes.light ? <Sun/> :
                props.theme == Themes.dracula ? <CloudFill/> :
                <Moon/>
              }
              </Icon>
              
              Theme
            </NavItem>

            <NavItem>
              <Icon><Settings/></Icon>
              Settings
            </NavItem>

            <NavItem>
              <Icon><Logout/></Icon>
              Logout
            </NavItem>
          </DropDown>
        </NavItem>
      </Navbar>
    </div>
  )
}
