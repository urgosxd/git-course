import "tailwindcss/dist/base.css"
import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme from "./theme"
import { ThemeProvider as ThemeMaterial } from "@material-ui/core/styles"

const GlobalStyles = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size:16px;
  
}

html,
body {
  height: 100%;
  overflow: auto;
}
p,
h1,
a,
button {
  font-family: Lato, sans-serif;
  color: #F7FAFC;
  text-decoration: none;
}
`

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={Theme}>
      <ThemeMaterial theme={Theme}>
        <GlobalStyles />
        {element}
      </ThemeMaterial>
    </ThemeProvider>
  )
}
