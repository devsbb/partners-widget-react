import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { SupportedLocalesEnum } from '../../translations';

const defaultValues = {
    locale: SupportedLocalesEnum.de,
    setLocale: () => {},
};

const LocaleReactContext = React.createContext(defaultValues);
const LocaleContextConsumer = LocaleReactContext.Consumer;

class LocaleContextProvider extends Component {
    constructor(props) {
        super(props);

        this.setLocale = this.setLocale.bind(this);

        this.state = {
            // eslint-disable-next-line react/no-unused-state
            locale: props.locale,
            // eslint-disable-next-line react/no-unused-state
            setLocale: this.setLocale,
        };
    }

    setLocale(locale) {
        this.setState({
            // eslint-disable-next-line react/no-unused-state
            locale,
        });
    }

    render() {
        const { children } = this.props;

        return (
            <LocaleReactContext.Provider value={this.state}>
                {children}
            </LocaleReactContext.Provider>
        );
    }
}

LocaleContextProvider.propTypes = {
    children: PropTypes.node,
    locale: PropTypes.oneOf(Object.keys(SupportedLocalesEnum)),
};

LocaleContextProvider.defaultProps = {
    children: null,
    locale: defaultValues.locale,
};

const LocaleContext = {
    Consumer: LocaleContextConsumer,
    Provider: LocaleContextProvider,
};

export default LocaleContext;
