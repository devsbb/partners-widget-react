import 'whatwg-fetch';
import queryString from 'query-string';

function checkStatus(response) {
    const { status, statusText } = response;

    if (status >= 200 && status < 300) {
        return response;
    }

    const error = new Error(statusText);
    error.response = response;
    throw error;
}

function parseBody(response) {
    return {
        ...response,
        body: response.json(),
    };
}

/**
 * fetchJSON
 * Call `fetch` (with polyfill) in order to fetch JSON.
 * It gets relative API path and request otions
 *
 * @param {string} relativePath
 * @param {object} options
 */
const fetchJSON = (relativePath, options) => {
    const { query = {}, ...restOptions } = options;
    const stringifiedQuery = query.keys.length
        ? `?${queryString.stringify(query)}`
        : '';

    // API_BASE_URL is getting from webpack global variables
    const promise = fetch(
        `${API_BASE_URL}${relativePath}${stringifiedQuery}`,
        restOptions
    )
        .then(parseBody)
        .then(checkStatus);

    return promise;
};

export default fetchJSON;
