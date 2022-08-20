import {createRoot} from 'react-dom/client'
import React from 'react'
import App from './App'
let root=createRoot(document.querySelector('#root'));
root.render(<App></App>)