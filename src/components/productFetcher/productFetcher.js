import { Component } from 'react';
import PropTypes from 'prop-types';

// Services
import { productService } from '../../services';

// Utils
import { WidgetStatesEnum, handleGlobalError, requireOneOf } from '../../utils';

class ProductFetcher extends Component {
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
        const {
            articleId,
            accessToken,
            stockEnumerated,
            stockAbsolute,
            eans,
            deliveryDate,
            deliveryTime,
        } = this.props;

        productService
            .getProduct({
                accessToken,
                articleId,
                stockEnumerated,
                stockAbsolute,
                eans,
                deliveryDate,
                deliveryTime,
            })
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

    componentDidCatch(error) {
        this.handleError(error);
    }

    handleError(error) {
        this.setState({
            widgetState: WidgetStatesEnum.hidden,
        });

        handleGlobalError(error);
    }

    render() {
        const { children } = this.props;

        return children(this.state);
    }
}

ProductFetcher.propTypes = {
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
    eans: PropTypes.arrayOf(PropTypes.string),
    deliveryDate: PropTypes.string,
    deliveryTime: PropTypes.string,
    children: PropTypes.func.isRequired,
};

ProductFetcher.defaultProps = {
    eans: [],
    deliveryTime: null,
    deliveryDate: null,
    stockEnumerated: null,
    stockAbsolute: null,
};

export default ProductFetcher;
