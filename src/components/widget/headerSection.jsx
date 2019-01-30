import React from 'react';
import PropTypes from 'prop-types';

const HeaderSection = ({ className, children }) => (
    <section className={className}>{children}</section>
);

HeaderSection.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

HeaderSection.defaultProps = {
    className: null,
    children: null,
};

export default HeaderSection;
