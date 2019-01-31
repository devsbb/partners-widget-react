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

const Widget = ({
    className,
    landingPageLink,
    moreInformationCallback,
    classNames,
}) => {
    const { priceClassNames, buttonClassNames } = classNames;

    return (
        <Container className={className}>
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
                    href={landingPageLink}
                    onClick={moreInformationCallback}
                >
                    more info
                </Link>
            </HeaderSection>
            <ProductPrice
                className={cn(
                    'grover-widget__product-price',
                    priceClassNames.priceContainer
                )}
                classNames={priceClassNames}
                priceInCents={19999}
                oldPriceInCents={29999}
                minimalPrice
            />
            <LinkButton
                icon={GroverIcon}
                className={buttonClassNames.button}
                classNames={buttonClassNames}
            >
                Mieten mit Grover
            </LinkButton>
        </Container>
    );
};

const priceClassNamesShape = {
    price: PropTypes.string,
    priceWithDiscount: PropTypes.shape({
        container: PropTypes.string,
        oldPrice: PropTypes.string,
        priceWithDiscount: PropTypes.string,
    }),
};

const priceClassNamesDefaultProps = {
    priceContainer: null,
    price: null,
    priceWithDiscount: {
        container: null,
        oldPrice: null,
        priceWithDiscount: null,
    },
};

Widget.propTypes = {
    className: PropTypes.string,
    classNames: PropTypes.shape({
        headerSection: PropTypes.string,
        headerText: PropTypes.string,
        moreInfoLink: PropTypes.string,
        priceClassNames: PropTypes.shape(priceClassNamesShape),
        buttonClassNames: PropTypes.shape({
            button: PropTypes.string,
            icon: PropTypes.string,
            text: PropTypes.string,
        }),
    }),
    landingPageLink: PropTypes.string.isRequired,
    moreInformationCallback: PropTypes.func,
};

Widget.defaultProps = {
    className: null,
    classNames: {
        headerSection: null,
        headerText: null,
        moreInfoLink: null,
        priceClassNames: priceClassNamesDefaultProps,
        buttonClassNames: {
            button: PropTypes.string,
            icon: PropTypes.string,
            text: PropTypes.string,
        },
    },
    moreInformationCallback: () => {},
};

export default Widget;
