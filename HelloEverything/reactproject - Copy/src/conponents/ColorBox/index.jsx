import React, { useState } from 'react';
import PropTypes from 'prop-types';
ColorBox.propTypes = {
    
};

function getColor() {
    const list_color = ["green", "yellow"]
    const randomIndex = Math.trunc(Math.random() * 2)
    return list_color[randomIndex]
}

function ColorBox() {
    const [color, setColor] = useState( () => {
        const initColor = localStorage.getItem("box_color") || "deeppink"
        return initColor
    })

    function handleColorBoxClick() {
        const newColor = getColor()
        setColor(newColor)
    }

    return (
        <div
            className='color-box'
            style={{backgroundColor: color}}
            onClick= {handleColorBoxClick}>
                Color Box
        </div>
    );
}

export default ColorBox;