import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null
}

function TodoForm(props) {
    const [value, setValue] = useState('')
    const { onSubmit } = props

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!onSubmit) return
        onSubmit(value)
    }

    const handleInputChange = (e) => {
        const val = e.target.value
        setValue(val)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input style={{ color: 'black' }} type="text"
                    onChange={handleInputChange} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default TodoForm;