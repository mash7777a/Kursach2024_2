import React from "react";
import {createRoot} from 'react-dom'
import { BrowserRouter } from "react-router-dom";

import App from "./components/App/App";
import style from "./styles/index.css"


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App className={style}/>
    </BrowserRouter> 
);