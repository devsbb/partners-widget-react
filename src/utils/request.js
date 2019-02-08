import fetchPonyfill from 'fetch-ponyfill';
import promisePonyfill from 'pinkie-promise';
import queryString from 'query-string';

const { fetch } = fetchPonyfill({ Promise: promisePonyfill });

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
 * Call `fetch` (with ponyfill) in order to fetch JSON.
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
    const { query = {}, headers, serverUrl, ...restOptions } = options;

    const stringifiedQuery = getStringifiedQuery(query);

    const requestOptions = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...headers,
        },
        ...restOptions,
    };

    // SERVER_URL is getting from webpack global variables
    const server = serverUrl || SERVER_URL;
    const promise = fetch(
        `${server}${relativePath}${stringifiedQuery}`,
        requestOptions
    )
        .then(parseBody)
        .then(checkStatus);

    return promise;
};

export default fetchJSON;
