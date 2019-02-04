// eslint-disable-next-line import/prefer-default-export
export function formatPriceInCents(priceInCents) {
    const price = Math.floor(priceInCents / 100);
    const cents = priceInCents % 100;
    const formattedCents = cents < 10 ? `0${cents}` : `${cents}`;

    return `€${price}.${formattedCents}`;
}
