import { useState, useEffect } from 'react';
import React from 'react';

const Text = () => {
    const [text, setText] = useState("");

    useEffect(() => {
        console.log("component mounted");
        return () => {
            console.log("component unmounted");
        }
    }, []);


    return (
        <div>
            <input onChange={(event) => {
                setText(event.target.value);
            }} />

            <h1>{text}</h1>
        </div>


    );
};

export default Text;