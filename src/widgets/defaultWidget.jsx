import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import { Widget } from '../components';

// Services
import { productService } from '../services';

// Utils
import { WidgetStatesEnum, StockValuesEnum } from '../utils';

class DefaultWidget extends Component {
    constructor(props) {
        super(props);

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
            .then(apiProduct => {
                const cheapestPlan = apiProduct.rental_plans.find(
                    plan => plan.is_cheapest
                );

                const { price, promotion_price: promotionPrice } = cheapestPlan;

                this.setState({
                    price: {
                        originalPriceInCents: price.cents,
                        discountPriceInCents:
                            promotionPrice && promotionPrice.cents,
                        minimalPrice: apiProduct.rental_plans.length > 0,
                    },
                    checkoutUrl: apiProduct.checkout_url,
                    widgetState: apiProduct.state,
                });
            });
    }

    render() {
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
};

export default DefaultWidget;
