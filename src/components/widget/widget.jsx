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
    landingPageLink,
    moreInformationCallback,
    classNames,
    productName,
    productPrice,
}) => {
    const priceClassNames = mapClassNamesToPriceClassNames(classNames);
    const buttonClassNames = mapClassNamesToButtonClassNames(classNames);

    return (
        <Container className={className}>
            <HeaderSection
                className={cn(
                    'grover-widget__header-section',
                    classNames.headerSection
                )}
            >
                <HeaderText className={classNames.headerText}>
                    {productName}
                </HeaderText>

                <Link
                    className={cn(
                        'grover-widget__more-info-link',
                        classNames.moreInfoLink
                    )}
                    target="_blank"
                    href={landingPageLink}
                    onClick={moreInformationCallback}
                >
                    More Info
                </Link>
            </HeaderSection>

            <ProductPrice
                className={cn(
                    'grover-widget__product-price',
                    classNames.priceContainer
                )}
                classNames={priceClassNames}
                discountPriceInCents={productPrice.originalPriceInCents}
                originalPriceInCents={productPrice.discountPriceInCents}
                minimalPrice
            />

            <LinkButton
                icon={GroverIcon}
                href={landingPageLink}
                target="_blank"
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
    landingPageLink: PropTypes.string.isRequired,
    moreInformationCallback: PropTypes.func,
    productName: PropTypes.string.isRequired,
    productPrice: PropTypes.shape({
        originalPriceInCents: PropTypes.number.isRequired,
        discountPriceInCents: PropTypes.number.isRequired,
        minimalPrice: PropTypes.bool.isRequired,
    }).isRequired,
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
};

export default Widget;
