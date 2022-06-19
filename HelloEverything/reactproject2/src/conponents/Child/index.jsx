import React, { Component, useImperativeHandle, useRef } from "react";

const Child = React.forwardRef((props, ref) => {
    const [text, setText] = React.useState("a");
    const [number, setNumber] = React.useState(1);

    const handleChange = (event) => {
        alert('handle change')
        setText(event.target.value);
    };
    useImperativeHandle(ref, () => (
        {
            incrseaseNumber: () => handleIncreaseNum(),
            //returnText: () => text,

            returnText: () => {
                console.log("return text:" + text);
                return (text)
            }
        }));

    
        const handleIncreaseNum = () => {
            setNumber(number + 1)
        }


    return (
        <div>
            <input type="text" onChange={handleChange} />
            <p>{number}</p>
        </div>
    );
});

export default Child