// eslint-disable-next-line import/prefer-default-export
export function formatPriceInCents(priceInCents) {
    const price = Math.floor(priceInCents / 100);
    const cents = priceInCents % 100;

    return `€${price}.${cents}`;
}
