import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { GroverIcon } from '../../icons';
import { SupportedLocalesEnum } from '../../translations';

import Container from '../container';
import { LinkButton } from '../button';
import ProductPrice from '../productPrice';
import HeaderText from '../headerText';
import Link from '../link';
import FormattedMessage from '../formattedMessage';
import LocaleContext from '../localeContext';

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
    moreInformationUrl,
    classNames,
    price,
    unavailable,
    locale,
    onButtonClick,
}) => {
    const priceClassNames = mapClassNamesToPriceClassNames(classNames);
    const buttonClassNames = mapClassNamesToButtonClassNames(classNames);

    return (
        <LocaleContext.Provider locale={locale}>
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
                        <ProductPrice
                            className={cn(
                                'grover-widget__product-price',
                                classNames.priceContainer
                            )}
                            classNames={priceClassNames}
                            originalPriceInCents={price.originalPriceInCents}
                            discountPriceInCents={price.discountPriceInCents}
                            minimalPrice={price.minimalPrice}
                        />
                    </HeaderText>

                    <Link
                        className={cn(
                            'grover-widget__more-info-link',
                            classNames.moreInfoLink
                        )}
                        target="_blank"
                        href={moreInformationUrl || checkoutUrl}
                        disabled={moreInformationUrl ? false : unavailable}
                    >
                        <FormattedMessage translationKey="MORE_INFO_LINK" />
                    </Link>
                </HeaderSection>

                <FormattedMessage translationKey="RENT_NOW_HEADER" />

                <LinkButton
                    icon={GroverIcon}
                    href={checkoutUrl}
                    target="_blank"
                    disabled={unavailable}
                    className={classNames.button}
                    classNames={buttonClassNames}
                    onClick={onButtonClick}
                >
                    <FormattedMessage
                        translationKey={
                            unavailable
                                ? 'UNAVAILABLE_BUTTON'
                                : 'RENT_WITH_GROVER_BUTTON'
                        }
                    />
                </LinkButton>
            </Container>
        </LocaleContext.Provider>
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
    moreInformationUrl: PropTypes.string,
    price: PropTypes.shape({
        originalPriceInCents: PropTypes.number.isRequired,
        discountPriceInCents: PropTypes.number,
        minimalPrice: PropTypes.bool.isRequired,
    }).isRequired,
    unavailable: PropTypes.bool,
    locale: PropTypes.oneOf(Object.keys(SupportedLocalesEnum)),
    onButtonClick: PropTypes.func,
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
    moreInformationUrl: null,
    unavailable: false,
    locale: SupportedLocalesEnum.de,
    onButtonClick: () => {},
};

export default Widget;
