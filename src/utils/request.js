import 'whatwg-fetch';
import queryString from 'query-string';

function checkStatus(payload) {
    const { status, statusText } = payload.response;

    if (status >= 200 && status < 300) {
        return payload;
    }

    const error = new Error(statusText);
    error.response = payload.response;
    throw error;
}

function parseBody(response) {
    return response.json().then(bodyAsJson => ({
        response,
        body: bodyAsJson,
    }));
}

function getStringifiedQuery(query) {
    return Object.keys(query).length
        ? `?${queryString.stringify(query, { arrayFormat: 'bracket' })}`
        : '';
}

/**
 * fetchJSON
 * Call `fetch` (with polyfill) in order to fetch JSON.
 * It gets relative API path and request otions
 * Return promise with payload:
 * @example {
 *   response, // Response,
 *   body, // body that is parsed from json
 * }
 * @param {string} relativePath
 * @param {object} options
 */
const fetchJSON = (relativePath, options = {}) => {
    const { query = {}, headers, ...restOptions } = options;

    const stringifiedQuery = getStringifiedQuery(query);

    const requestOptions = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...headers,
        },
        ...restOptions,
    };

    // API_BASE_URL is getting from webpack global variables
    const promise = fetch(
        `${API_BASE_URL}${relativePath}${stringifiedQuery}`,
        requestOptions
    )
        .then(parseBody)
        .then(checkStatus);

    return promise;
};

export default fetchJSON;
