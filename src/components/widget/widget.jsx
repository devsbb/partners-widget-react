import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { GroverIcon } from '../../icons';

import Container from '../container';
import { LinkButton } from '../button';
import ProductPrice from '../productPrice';
import HeaderText from '../headerText';
import Link from '../link';

import HeaderSection from './headerSection';

function mapClassNamesToButtonClassNames(classNames = {}) {
    const { buttonIcon, buttonText } = classNames;

    return {
        icon: buttonIcon,
        text: buttonText,
    };
}

function mapClassNamesToPriceClassNames(classNames = {}) {
    const {
        price,
        discountPriceContainer,
        discountPrice,
        originalPrice,
    } = classNames;

    return {
        price,
        discountPriceContainer,
        discountPrice,
        originalPrice,
    };
}

const Widget = ({
    className,
    checkoutUrl,
    moreInformationCallback,
    classNames,
    price,
    unavailable,
}) => {
    const priceClassNames = mapClassNamesToPriceClassNames(classNames);
    const buttonClassNames = mapClassNamesToButtonClassNames(classNames);

    return (
        <Container
            ariaDisabled={unavailable}
            className={cn(className, {
                'grover-widget--unavailable': unavailable,
            })}
        >
            <HeaderSection
                className={cn(
                    'grover-widget__header-section',
                    classNames.headerSection
                )}
            >
                <HeaderText className={classNames.headerText}>
                    Jetzt mieten statt kaufen
                </HeaderText>

                <Link
                    className={cn(
                        'grover-widget__more-info-link',
                        classNames.moreInfoLink
                    )}
                    target="_blank"
                    href={checkoutUrl}
                    disabled={unavailable}
                    onClick={moreInformationCallback}
                >
                    Mehr Infos
                </Link>
            </HeaderSection>

            <ProductPrice
                className={cn(
                    'grover-widget__product-price',
                    classNames.priceContainer
                )}
                classNames={priceClassNames}
                originalPriceInCents={price.originalPriceInCents}
                discountPriceInCents={price.discountPriceInCents}
                minimalPrice
            />

            <LinkButton
                icon={GroverIcon}
                href={checkoutUrl}
                target="_blank"
                disabled={unavailable}
                className={classNames.button}
                classNames={buttonClassNames}
            >
                Mieten mit Grover
            </LinkButton>
        </Container>
    );
};

Widget.propTypes = {
    className: PropTypes.string,
    classNames: PropTypes.shape({
        headerSection: PropTypes.string,
        headerText: PropTypes.string,
        moreInfoLink: PropTypes.string,
        priceContainer: PropTypes.string,
        price: PropTypes.string,
        discountPriceContainer: PropTypes.string,
        discountPrice: PropTypes.string,
        originalPrice: PropTypes.string,
        button: PropTypes.string,
        buttonIcon: PropTypes.string,
        buttonText: PropTypes.string,
    }),
    checkoutUrl: PropTypes.string.isRequired,
    moreInformationCallback: PropTypes.func,
    price: PropTypes.shape({
        originalPriceInCents: PropTypes.number.isRequired,
        discountPriceInCents: PropTypes.number,
        minimalPrice: PropTypes.bool.isRequired,
    }).isRequired,
    unavailable: PropTypes.bool,
};

Widget.defaultProps = {
    className: null,
    classNames: {
        headerSection: null,
        headerText: null,
        moreInfoLink: null,
        priceContainer: null,
        price: null,
        discountPriceContainer: null,
        discountPrice: null,
        originalPrice: null,
        button: null,
        buttonIcon: null,
        buttonText: null,
    },
    moreInformationCallback: () => {},
    unavailable: false,
};

export default Widget;
