import React, {useState} from 'react'

import Simp, {
  Themes,
  Content,
  Route,
  Theme
} from 'simpstyle';

import Navbar from './navbar';

import Home from './home';
import Dash from './dash';
import About from './about';

import 'simpstyle/dist/index.css';

const App = () => {
  const [themeState, setThemeState] = useState<Theme>(Themes.light);

  return (
    <div>
      <Simp theme={themeState}>
        <Navbar theme={themeState} setTheme={setThemeState} />

        <Content>
          <Route exact path="/" component={() => <Home/>}/>
          <Route exact path="/dash" component={() => <Dash/>}/>
          <Route exact path="/about" component={() => <About/>}/>
        </Content>
      </Simp>
    </div>
  )
}

export default App
