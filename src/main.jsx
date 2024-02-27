import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './root'
import CrmMin from './component/sidebar/html'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
    <CrmMin />
  </React.StrictMode>,
)
