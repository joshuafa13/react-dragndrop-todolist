import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
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
    background-color: rgba(61, 89, 121, 0.534);
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
    height: 800px;
    background: var(--darkGrey);
    text-align: center;
    margin: 128px auto;
    border-radius: 10px;
    padding-bottom: 32px;
    overflow-y: scroll;
  }
  ul {
    height: 600px;
    overflow-y: scroll;
  }
`
