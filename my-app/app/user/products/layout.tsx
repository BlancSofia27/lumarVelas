// app/products/layout.tsx
import Navbar from "@/components/ui/Navbar";
import { ReactNode } from "react";

interface ProductsLayoutProps {
  children: ReactNode;
}

const ProductsLayout = ({ children }: ProductsLayoutProps) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default ProductsLayout;
