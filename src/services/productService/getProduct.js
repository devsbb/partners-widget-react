import fetchJSON from '../../utils/request';

import { StockValuesEnum } from '../../utils';

function validateGetProduct(accessToken, articleId, stock) {
    if (!accessToken) {
        throw new Error(`accessToken is required for fetching a product`);
    }

    if (!articleId) {
        throw new Error(`article is required for fetching a product`);
    }

    if (
        typeof stock !== 'number' &&
        Boolean(!Object.keys(StockValuesEnum).find(s => stock === s))
    ) {
        throw new Error(
            `stock is required to be number either one of ${Object.keys(
                StockValuesEnum
            ).join(' ,')}`
        );
    }
}

function handleError(error) {
    const { response } = error;

    if (!response) {
        throw error;
    }

    console.error(
        `Grover API responded with ${response.status} status: ${
            response.statusText
        }`
    );

    return {
        checkout_url: '',
        state: 'hidden',
        rental_plans: [],
    };
}

function handleResponse(response) {
    const { body } = response;

    return body;
}

function getProduct(accessToken, articleId, stock) {
    validateGetProduct(accessToken, articleId, stock);

    const queryParams = {
        accessToken,
    };

    if (typeof stock === 'number') {
        queryParams.stockAbsolute = stock;
    } else {
        queryParams.stockEnumerated = stock;
    }

    const promise = fetchJSON(`/partners/products/${articleId}`, {
        query: queryParams,
    })
        .then(handleResponse)
        .catch(handleError);

    return promise;
}

export default getProduct;
