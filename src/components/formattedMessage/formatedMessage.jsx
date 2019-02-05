import React from 'react';
import PropTypes from 'prop-types';

import LocaleContext from '../localeContext';

import getTranslationKey from '../../translations';

const FormattedMessage = ({ translationKey }) => (
    <LocaleContext.Consumer>
        {({ locale }) => getTranslationKey(locale, translationKey)}
    </LocaleContext.Consumer>
);

FormattedMessage.propTypes = {
    translationKey: PropTypes.string.isRequired,
};

export default FormattedMessage;
