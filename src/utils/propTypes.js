/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
import PropTypes from 'prop-types';

/**
 * Takes a propTypes object ensuring that at least one of the passed types
 * exists on the component.
 *
 * @param {object} requiredProps
 * @param {bool} allowMultiple  If true multiple props may be passed to the component
 * @return {Function(props, propName, componentName, location)}
 * @example
 * MyComponent.propTypes = {
 *     normalProp: PropType.string.isRequired,
 *     foo: requireOneOf({
 *         foo: PropTypes.oneOfType([
 *             PropTypes.string,
 *             PropTypes.number
 *         ]),
 *         bar: PropTypes.string,
 *     }, true),
 * };
 */
export function requireOneOf(requiredProps, allowMultiple = false) {
    return (props, propName, componentName, location) => {
        let found = false;
        let error = null;

        Object.keys(requiredProps).forEach(requiredPropName => {
            if (props[requiredPropName] == null) {
                return;
            }

            if (!allowMultiple && found) {
                error = new Error(
                    `Props ${found} and ${requiredPropName} were both passed to ${componentName}`
                );
                return;
            }

            const singleRequiredProp = {
                [requiredPropName]: requiredProps[requiredPropName],
            };

            const singleProp = {
                [requiredPropName]: props[requiredPropName],
            };

            // Does the prop match the type?
            try {
                PropTypes.checkPropTypes(
                    singleRequiredProp,
                    singleProp,
                    location,
                    componentName
                );
            } catch (e) {
                error = e;
                return;
            }

            found = requiredPropName;
        });

        if (!found) {
            const propNames = Object.keys(requiredProps).join('", "');

            return new Error(`One of "${propNames}" is required`);
        }

        if (error) {
            return error;
        }
    };
}
