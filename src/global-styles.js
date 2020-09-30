import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
  
  body {
    padding: 0px;
    margin: 0px;
    font-family: 'Lato', sans-serif;
    background-color: #fafafa;
  }
`

export default GlobalStyle
