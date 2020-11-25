import React from 'react';
import PropTypes from 'prop-types';
import { useDebouncedCallback } from 'use-debounce';

function TextBox({ fetchLinks }) {
    const debounced = useDebouncedCallback(fetchLinks, 600);
    return (
        <div className="text-box">
            <label htmlFor="linkTextarea">
                Please put here some text with a link
            </label>
            <textarea
                id="linkTextarea"
                className="text-box-textarea"
                rows="4"
                cols="50"
                onChange={(e) => debounced.callback(e.target.value)}
            />
        </div>
    );
}

TextBox.propTypes = {
    fetchLinks: PropTypes.func.isRequired,
};

export default TextBox;
