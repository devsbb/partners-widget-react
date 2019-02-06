import fetchJSON from '../../utils/request';

import { WidgetStatesEnum, mapApiProduct } from '../../utils';

function validateGetProduct(payload) {
    const { accessToken, articleId, stockEnumerated, stockAbsolute } = payload;

    if (!accessToken) {
        throw new Error(`accessToken is required for fetching a product`);
    }

    if (!articleId) {
        throw new Error(`article is required for fetching a product`);
    }

    if (!stockEnumerated && !stockAbsolute) {
        throw new Error(
            `stockEnumerated or stockAbsolute is required for fetching a product`
        );
    }
}

function handleError(error) {
    const { response } = error;

    if (!response) {
        throw error;
    }

    // eslint-disable-next-line no-console
    console.error(
        `Grover API responded with ${response.status} status: ${
            response.statusText
        }`
    );

    return mapApiProduct({
        checkout_url: '',
        state: WidgetStatesEnum.hidden,
        rental_plans: [],
    });
}

function handleResponse({ body }) {
    return mapApiProduct(body);
}

function getProduct(payload) {
    validateGetProduct(payload);

    const {
        accessToken,
        articleId,
        eans,
        deliveryDate,
        deliveryTime,
        stockEnumerated,
        stockAbsolute,
    } = payload;

    const queryParams = {
        accessToken,
        eans,
    };

    if (stockAbsolute) {
        queryParams.stockAbsolute = stockAbsolute;
    } else if (stockEnumerated) {
        queryParams.stockEnumerated = stockEnumerated;
    }

    if (deliveryDate) {
        queryParams.deliveryDate = deliveryDate;
    } else if (deliveryTime) {
        queryParams.deliveryTime = deliveryTime;
    }

    const promise = fetchJSON(`/partners/products/${articleId}`, {
        method: 'GET',
        query: queryParams,
    })
        .then(handleResponse)
        .catch(handleError);

    return promise;
}

export default getProduct;
