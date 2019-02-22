import React, { Component } from 'react';
import insertCss from 'insert-css';

import style from '../styles/index.css';

/**
 * withStyleLoading
 * This HOC only using in production in order to inject library styles on component mount
 * @param {*} EnhancedComponent
 * @returns HOC
 */
function withStyleLoading(EnhancedComponent) {
    class StyleLoadingHOC extends Component {
        constructor(props) {
            super(props);

            this.state = {
                isInitialised: false,
            };
        }

        componentDidMount() {
            // This plugin will inject cssString
            // to style tag at the top of document head
            insertCss(style.toString(), {
                prepend: true,
            });

            this.setState({
                isInitialised: true,
            });
        }

        render() {
            const { isInitialised } = this.state;

            if (!isInitialised) {
                return null;
            }

            return <EnhancedComponent {...this.props} />;
        }
    }

    return StyleLoadingHOC;
}

export default withStyleLoading;
