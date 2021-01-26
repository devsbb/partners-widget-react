import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import { Widget, ProductFetcher } from '../components';

// Utils
import { WidgetStatesEnum, handleGlobalError, requireOneOf } from '../utils';
import { SupportedLocalesEnum } from '../translations';

class DefaultWidget extends Component {
    constructor(props) {
        super(props);

        this.handleError = this.handleError.bind(this);

        this.state = {
            hasError: false,
        };
    }

    componentDidCatch(error) {
        this.handleError(error);
    }

    handleError(error) {
        this.setState({
            hasError: true,
        });

        handleGlobalError(error);
    }

    render() {
        const {
            moreInformationUrl,
            articleId,
            accessToken,
            stockEnumerated,
            stockAbsolute,
            eans,
            deliveryDate,
            deliveryTime,
            locale,
            className,
            classNames,
            serverUrl,
            onButtonClick,
            hasBundle,
        } = this.props;

        const { hasError } = this.state;

        if (hasError) {
            return null;
        }

        return (
            <ProductFetcher
                articleId={articleId}
                accessToken={accessToken}
                stockEnumerated={stockEnumerated}
                stockAbsolute={stockAbsolute}
                eans={eans}
                deliveryDate={deliveryDate}
                deliveryTime={deliveryTime}
                serverUrl={serverUrl}
                hasBundle={hasBundle}
            >
                {({ price, checkoutUrl, widgetState }) => {
                    if (widgetState === WidgetStatesEnum.hidden) {
                        return null;
                    }

                    return (
                        <Widget
                            className={className}
                            classNames={classNames}
                            locale={locale}
                            price={price}
                            checkoutUrl={checkoutUrl}
                            unavailable={
                                widgetState === WidgetStatesEnum.unavailable
                            }
                            moreInformationUrl={moreInformationUrl}
                            onButtonClick={onButtonClick}
                        />
                    );
                }}
            </ProductFetcher>
        );
    }
}

DefaultWidget.propTypes = {
    articleId: PropTypes.string.isRequired,
    accessToken: PropTypes.string.isRequired,
    stockEnumerated: requireOneOf({
        stockEnumerated: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        stockAbsolute: PropTypes.string,
    }),
    stockAbsolute: PropTypes.string,
    moreInformationUrl: PropTypes.string,
    eans: PropTypes.arrayOf(PropTypes.string),
    deliveryDate: PropTypes.string,
    deliveryTime: PropTypes.string,
    locale: PropTypes.oneOf(Object.keys(SupportedLocalesEnum)),
    serverUrl: PropTypes.string,
    className: PropTypes.string,
    classNames: PropTypes.shape({
        headerSection: PropTypes.string,
        headerText: PropTypes.string,
        moreInfoLink: PropTypes.string,
        priceContainer: PropTypes.string,
        price: PropTypes.string,
        discountPriceContainer: PropTypes.string,
        discountPrice: PropTypes.string,
        originalPrice: PropTypes.string,
        button: PropTypes.string,
        buttonIcon: PropTypes.string,
        buttonText: PropTypes.string,
    }),
    onButtonClick: PropTypes.func,
    hasBundle: PropTypes.bool,
};

DefaultWidget.defaultProps = {
    moreInformationUrl: null,
    eans: [],
    deliveryTime: null,
    deliveryDate: null,
    stockEnumerated: null,
    stockAbsolute: null,
    locale: SupportedLocalesEnum.de,
    serverUrl: null,
    className: null,
    classNames: {
        headerSection: null,
        headerText: null,
        moreInfoLink: null,
        priceContainer: null,
        price: null,
        discountPriceContainer: null,
        discountPrice: null,
        originalPrice: null,
        button: null,
        buttonIcon: null,
        buttonText: null,
    },
    onButtonClick: () => {},
    hasBundle: false,
};

export default DefaultWidget;
