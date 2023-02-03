import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { Login } from './componentes/pages/login/login'
import { GlobalStyle, theme } from './global-styles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Petshop } from './componentes/pages/Petshop/petshop'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/Petshop' element={<Petshop />} />
      </Routes>
      </BrowserRouter>
      <GlobalStyle />      
    </ThemeProvider>
  </React.StrictMode>,
)
