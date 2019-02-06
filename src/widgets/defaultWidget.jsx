import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import { Widget, ProductFetcher } from '../components';

// Utils
import { WidgetStatesEnum, handleGlobalError, requireOneOf } from '../utils';

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
            moreInformationCallback,
            articleId,
            accessToken,
            stockEnumerated,
            stockAbsolute,
            eans,
            deliveryDate,
            deliveryTime,
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
            >
                {({ price, checkoutUrl, widgetState }) => (
                    <Widget
                        price={price}
                        checkoutUrl={checkoutUrl}
                        unavailable={
                            widgetState === WidgetStatesEnum.unavailable
                        }
                        moreInformationCallback={moreInformationCallback}
                    />
                )}
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
    moreInformationCallback: PropTypes.func,
    eans: PropTypes.arrayOf(PropTypes.string),
    deliveryDate: PropTypes.string,
    deliveryTime: PropTypes.string,
};

DefaultWidget.defaultProps = {
    moreInformationCallback: null,
    eans: [],
    deliveryTime: null,
    deliveryDate: null,
    stockEnumerated: null,
    stockAbsolute: null,
};

export default DefaultWidget;
