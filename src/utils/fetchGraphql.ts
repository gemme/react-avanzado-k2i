//import {query} from '../queries/getProducts';
// url mock.shop/api
// content type json default
// query -> query graphql
// variables, { $variantsFirst }
console.log('query');

// implementar un custom hook con nombre useFetchGraph
// hacer un cmponente muestre los prodiuctos
// validaciones

export const fetchGraphql = async (url: string, query: string, variables: any, headers: Record<string, unknown> | undefined = {}) => {

    try{
       const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                ...headers
            },
            body: JSON.stringify({query, variables}) // query, variables
        });

        if(!response.ok){
            console.log(response);
            throw new Error('Graphql request error');
        }
        
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error);
        throw error;
    }

}

/*
const variables = { "variantsFirst": 1 };

const productsQuery = 
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
  */  

/*
fetchGraphql('https://mock.shop/api',productsQuery, variables)
    .then(json => {
        console.log(json);
        console.log(JSON.stringify(json));
    })
    .catch(error => console.log(error));
    */