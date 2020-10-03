import React from 'react'

import Simp, { Themes, Content, Link, Route, Navbars } from 'simpstyle';

import Home from './home';
import Dash from './dash';
import About from './about';

import 'simpstyle/dist/index.css';

const App = () => {
  return (
    <div>
      <Simp theme={Themes.light}>
          <Navbars.Generic>
            {/* <Image src={}></Image> */}
            <Link>Home</Link>
            <Link to="/dash">Dash</Link>
            <Link to="/about">About</Link>
          </Navbars.Generic>

          <Content>
            <Route exact path="/" component={() => <Home/>}/>
            <Route path="/dash" component={() => <Dash/>}/>
            <Route path="/about" component={() => <About/>}/>
          </Content>
      </Simp>
    </div>
  )
}

export default App
