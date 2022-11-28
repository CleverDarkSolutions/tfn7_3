import React from 'react';
import Article from "./article";
import data from "../data/browsers.json";

export default function Section() {
    return (
        <section>
            <h1>Popular web browsers</h1>
            {
                data.map((browser, index) => {
                    return <Article key={index} name={browser.name} logo={browser.logo} description={browser.description}/>
                })
            }
        </section>
    );
}