import React from 'react';
import PropTypes from 'prop-types';

const HeaderSection = ({ className, children }) => (
    <section className={className}>{children}</section>
);

HeaderSection.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

HeaderSection.defaultProps = {
    className: null,
};

export default HeaderSection;
