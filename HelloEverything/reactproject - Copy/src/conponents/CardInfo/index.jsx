import React from 'react';
import PropTypes from 'prop-types';
import './index.scss'

CardInfo.propTypes = {
    imgSource: PropTypes.object,
};

CardInfo.defaultProps = {
    imgSource: ''
}

function CardInfo(props) {
    const {imgSource} = props
    return (
        <div className='card-wrap'>
            <div className='card-head'>
                 
            </div>
            <div className='card-body'>
                <div className='card-name'>Name</div>
                <div className='card-info'>
                    <div className='card-content'>
                        <span> Title </span>
                        <a href='https://google.com'>https://google.com</a>
                    </div>
                </div>
            </div>
            <div className='card-image'>
                <img src={imgSource}  />
            </div>
        </div>
    );
}

export default CardInfo;