import React from 'react';
import PropTypes from 'prop-types';
import PreviewLinkBox from './preview-link-box';

function PreviewLink({ error, links }) {
    if (error) return <h3>{error}</h3>;
    return (
        <div className="link-preview-container">
            {!!links.length &&
                links.map(({ id, site_name, title, description, image }) => (
                    <PreviewLinkBox
                        key={id}
                        siteName={site_name}
                        title={title}
                        description={description}
                        image={image}
                    />
                ))}
        </div>
    );
}

PreviewLink.propTypes = {
    error: PropTypes.string.isRequired,
    links: PropTypes.array.isRequired,
};

export default PreviewLink;
