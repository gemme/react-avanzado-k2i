import { createContext } from 'react';


export interface ProductContextType {
    selectedProduct: string;
    title: string;
    setSelectedProduct: (product: string) => void
}
// estado inicial
export const ProductContext = createContext<ProductContextType>({
    title: '',
    selectedProduct: '',
    setSelectedProduct: ()=> {},
});