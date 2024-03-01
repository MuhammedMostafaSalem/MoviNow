import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import { Provider } from 'react-redux';
import { store } from './Store/store.js'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
