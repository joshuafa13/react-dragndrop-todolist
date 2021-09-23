import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');
  
  :root {
    --lightGrey: grey;
    --medGrey: #353535;
    --darkGrey: #1c1c1c;
    --white: #fff
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Abel', sans-serif;
  }

  body {
    background-color: var(--medGrey);
  }

  h1 {
    margin: 32px 0;
    color: var(--white);
    font-size: 2.5rem;
    user-select: none;
  }

  .todo-app {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 520px;
    min-height: 600px;
    background: #1c1c1c;
    text-align: center;
    margin: 128px auto;
    border-radius: 10px;
    padding-bottom: 32px;
  }
`
