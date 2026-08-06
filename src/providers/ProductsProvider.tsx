

import { ProductContext } from "./ProductContext"
import type { ProductContextType } from "./ProductContext"
import { useContext, useState} from "react";
import type { ReactNode} from "react";


export const useProducts = () => useContext(ProductContext);

interface ProductProviderProps {
    children: ReactNode
}

export const ProductProvider = ({children}: ProductProviderProps) => {
    const [selectedProduct, setSelectedProduct] = useState('no product selected');
    const title = 'ik2 products';

    return ( 
        <ProductContext value={{
            selectedProduct,
            setSelectedProduct,
            title
        }}>
            {children}
        </ProductContext>
    );
} 

interface ProductProviderContextProps {
    children: (context: ProductContextType) => ReactNode
}

export const ProductProviderContext = ({children}: ProductProviderContextProps) => {
    const context  = useProducts();
    // Render props
    return children(context);
}