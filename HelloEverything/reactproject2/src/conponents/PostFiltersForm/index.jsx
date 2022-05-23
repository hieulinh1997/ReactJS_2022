import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFiltersForm.propTypes = {
    onSubmit: PropTypes.func,
};

PostFiltersForm.defaultProps = {
    onSubmit: null
}

function PostFiltersForm(props) {
    const {onSubmit} = props
    const [searchTerm, setSearchTerm] = useState('')

    //useRef tạo ra 1obj và obj này k thay đổi giữa những lần render
    const typingTimeoutRef = useRef(null)
    
    function handleSearchTermChange(e) {
        const value = e.target.value
        setSearchTerm(value)

        if (!onSubmit) return

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current)
        }
            

        typingTimeoutRef.current = setTimeout(()=> {
            const formValues = {
                searchTerm: value
            }
            onSubmit(formValues)
        }, 300)
        
    }
    return (
        <div>
            <input 
            style={{color: 'black'}}
            type='text'
            value={searchTerm}
            onChange={handleSearchTermChange}/>
        </div>
    );
}

export default PostFiltersForm;