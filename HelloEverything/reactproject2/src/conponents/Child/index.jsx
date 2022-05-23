import React, { Component, useImperativeHandle, useRef } from "react";

const Child = React.forwardRef((props, ref) => {
    const [text, setText] = React.useState("");
    const [number, setNumber] = React.useState(1);

    const handleChange = (event) => {
        
        console.log("handleChange");
        setText(event.target.value);
    };

    useImperativeHandle(ref, () => (
        {
            incrseaseNumber: () => {
                setNumber(number + 1)
                console.log("return text:" + number + 1);
            } ,
            //returnText: () => text,

            returnText: () => {
                console.log("return text:" + text);
                return (text)
            }
        }));

    return (
        <div>
            <input type="text" onChange={handleChange} />
            <p>{number}</p>
        </div>
    );
});

export default Child