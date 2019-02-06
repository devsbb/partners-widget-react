import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import { Widget } from '../components';

// Services
import { productService } from '../services';

// Utils
import { WidgetStatesEnum, StockValuesEnum, handleGlobalError } from '../utils';

class DefaultWidget extends Component {
    constructor(props) {
        super(props);

        this.handleError = this.handleError.bind(this);

        this.state = {
            widgetState: WidgetStatesEnum.hidden,
            checkoutUrl: '',
            price: {
                originalPriceInCents: 0,
                discountPriceInCents: 0,
                minimalPrice: false,
            },
        };
    }

    componentDidMount() {
        const { articleId, accessToken, stock } = this.props;

        productService
            .getProduct(accessToken, articleId, stock)
            .then(product => {
                const {
                    cheapestPlan,
                    rentalPlans,
                    checkoutUrl,
                    widgetState,
                } = product;

                const { price } = cheapestPlan;

                this.setState({
                    price: {
                        ...price,
                        minimalPrice: rentalPlans.length > 0,
                    },
                    checkoutUrl,
                    widgetState,
                });
            })
            .catch(this.handleError);
    }

    handleError(error) {
        this.setState({
            widgetState: WidgetStatesEnum.hidden,
        });

        handleGlobalError(error);
    }

    render() {
        const { moreInformationCallback } = this.props;
        const { widgetState, checkoutUrl, price } = this.state;

        if (widgetState === WidgetStatesEnum.hidden) {
            return null;
        }

        const isUnavailable = widgetState === WidgetStatesEnum.unavailable;

        return (
            <Widget
                price={price}
                checkoutUrl={checkoutUrl}
                unavailable={isUnavailable}
                moreInformationCallback={moreInformationCallback}
            />
        );
    }
}

DefaultWidget.propTypes = {
    articleId: PropTypes.string.isRequired,
    accessToken: PropTypes.string.isRequired,
    stock: PropTypes.oneOfType([
        PropTypes.oneOf([
            StockValuesEnum.low,
            StockValuesEnum.medium,
            StockValuesEnum.none,
        ]),
        PropTypes.number,
    ]).isRequired,
    moreInformationCallback: PropTypes.func,
};

DefaultWidget.defaultProps = {
    moreInformationCallback: null,
};

export default DefaultWidget;
