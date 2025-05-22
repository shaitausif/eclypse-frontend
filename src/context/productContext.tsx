// context/productContext.tsx
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";


// 1. Define the Product details interface
interface ProductDetails {
  name: string;
  price: number;
  quantity: number;
}

// 2. Define the context type including the updater function
interface ProductContextType {
  productDetails: ProductDetails;
  setProductDetails: React.Dispatch<React.SetStateAction<ProductDetails>>;
}

// 3. Create the actual context
const ProductContext = createContext<ProductContextType | undefined>(undefined);

// 4. Create the Provider component
export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [productDetails, setProductDetails] = useState<ProductDetails>({
    name: "Silhoutte No. 1 - Vermilion",
    price: 7999,
    quantity: 1,
  });

  return (
    <ProductContext.Provider value={{ productDetails, setProductDetails }}>
      {children}
    </ProductContext.Provider>
  );
};

// 5. Create a custom hook to use the context safely
export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
