import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

Index.propTypes = {
    
};

function Index(props) {
    const history = useHistory()

    useEffect(() => {
        console.log("history");
        console.log(history.location);
    })
    return (
        <div>
            index
        </div>
    );
}

export default Index;