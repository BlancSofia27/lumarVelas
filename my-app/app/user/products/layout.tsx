// app/products/layout.tsx
import { ReactNode } from "react";

interface ProductsLayoutProps {
  children: ReactNode;
}

const ProductsLayout = ({ children }: ProductsLayoutProps) => {
  return (
    <div>
      
      <main>{children}</main>
    </div>
  );
};

export default ProductsLayout;
