export const query = () =>
`query ($productsFirst: Int!, $variantsFirst: Int!) {
  products(first: $productsFirst) {
    edges {
      node {
        id
        handle
        title
        description
        descriptionHtml
        totalInventory
        vendor
        featuredImage {
          id
          url
        }
        variants(first: $variantsFirst) {
          edges {
            node {
              selectedOptions {
                name
                value
              }
              price {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  }
}`;
