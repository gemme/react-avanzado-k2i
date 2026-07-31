export const query = () =>
`query ($variantsFirst: Int) {
  products(first: $variantsFirst) {
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
}`
