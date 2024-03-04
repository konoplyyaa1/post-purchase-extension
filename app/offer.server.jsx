const OFFERS = [
  {
    id: 1,
    title: "One time offer",
    productTitle: "The S-Series Snowboard",
    productImageURL:
      "https://cdn.shopify.com/s/files/1/0638/9753/4602/products/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1707921241", // Replace this with the product image's URL.
    productDescription: ["This PREMIUM snowboard is so SUPER DUPER awesome!"],
    originalPrice: "600",
    discountedPrice: "600",
    changes: [
      {
        type: "add_variant",
        variantID: 44294019252362, // Replace with the variant ID.
        quantity: 1,
        discount: {
          value: 15,
          valueType: "percentage",
          title: "15% off",
        },
      },
    ],
  },
];

/*
 * For testing purposes, product information is hardcoded.
 * In a production application, replace this function with logic to determine
 * what product to offer to the customer.
 */
export function getOffers() {
  return OFFERS;
}

/*
 * Retrieve discount information for the specific order on the backend instead of relying
 * on the discount information that is sent from the frontend.
 * This is to ensure that the discount information is not tampered with.
 */
export function getSelectedOffer(offerId) {
  return OFFERS.find((offer) => offer.id === offerId);
}
