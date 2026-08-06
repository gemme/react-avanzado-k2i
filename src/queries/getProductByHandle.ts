export const query = () =>
`query GetProductByHandle($handle: String!, $variantsFirst: Int!) {
  product(handle: $handle) {
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
          id
          title
          selectedOptions {
            name
            value
          }
          price {
            amount
            currencyCode
          }
          image {
            url
          }
        }
      }
    }
  }
}`;
