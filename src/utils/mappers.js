export function mapApiRentalPlan(apiRentalPlan) {
    const {
        id,
        price,
        promotionPrice,
        cheapest,
        description,
        minimum_term_months: minimumTermMonths,
    } = apiRentalPlan;

    return {
        id,
        cheapest,
        description,
        minimumTermMonths,
        price: {
            originalPriceInCents: price.cents,
            discountPriceInCents: promotionPrice && promotionPrice.cents,
        },
    };
}

export function mapApiProduct(apiProduct) {
    const rentalPlans = apiProduct.rental_plans.map(mapApiRentalPlan);
    const cheapestPlan = rentalPlans.find(plan => plan.cheapest);

    return {
        rentalPlans,
        cheapestPlan,
        checkoutUrl: apiProduct.checkout_url,
        widgetState: apiProduct.state,
    };
}
