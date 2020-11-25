import React from 'react';
import PropTypes from 'prop-types';

function PreviewLinkBox({ image, siteName, title, description }) {
    if (!image && !siteName && !title && !description)
        return (
            <div className="preview-link-box">
                Sorry, no preview for this one
            </div>
        );
    return (
        <div className="preview-link-box">
            <img src={image} alt="img" />
            <div>
                <h3>{siteName}</h3>
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
}

PreviewLinkBox.propTypes = {
    image: PropTypes.string.isRequired,
    siteName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default PreviewLinkBox;
