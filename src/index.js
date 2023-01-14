import React from "react"
import ReactDOMClient from "react-dom/client"
import App from './app'
import './styles/app.css'


const root = ReactDOMClient.createRoot(document.getElementById("app"));
root.render(<App/>);