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
        serverUrl,
        hasBundle,
    } = payload;

    const queryParams = {
        access_token: accessToken,
        eans,
    };

    if (stockAbsolute) {
        queryParams.stock_absolute = stockAbsolute;
    } else if (stockEnumerated) {
        queryParams.stock_enumerated = stockEnumerated;
    }

    if (deliveryDate) {
        queryParams.delivery_date = deliveryDate;
    } else if (deliveryTime) {
        queryParams.delivery_time = deliveryTime;
    }

    if (hasBundle) {
        queryParams.has_bundle = true;
    }

    const promise = fetchJSON(`/partners/products/${articleId}`, {
        method: 'GET',
        query: queryParams,
        serverUrl,
    })
        .then(handleResponse)
        .catch(handleError);

    return promise;
}

export default getProduct;
