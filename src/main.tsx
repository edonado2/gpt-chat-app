import React from 'react'
import ReactDOM from 'react-dom/client'
import { GptApp } from './GptApp.tsx'
import { BrowserRouter } from 'react-router-dom'
import {ThemeProviderGPT} from '../src/context/ThemeProvider.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProviderGPT>
      <GptApp/>
    </ThemeProviderGPT>
    </BrowserRouter>
  </React.StrictMode>,
)
