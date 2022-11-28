import React,{StrictMode} from "react";
import {createRoot} from "react-dom/client";

import Header from "./components/header";
import Footer from "./components/footer";
import Section from "./components/section";
import "./style/styles.scss"

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <header>
            <p>Navigation bar</p>
            <Header/>
        </header>
        <Section/>
        <Footer/>
    </StrictMode>
);