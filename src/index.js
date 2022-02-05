import React from 'react'
import { render } from 'react-dom'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }

    #app {
        font-family: "Rokkitt", serif;
        font-size: 16px;
    }
    
    h1 {
        font-size: 40px;
    }
    
    h2 {
        font-size: 32px;
    }
`
render(
  <React.Fragment>
    <GlobalStyle/>
    <h1>hello world</h1>
  </React.Fragment>
  , document.getElementById('app')
)
