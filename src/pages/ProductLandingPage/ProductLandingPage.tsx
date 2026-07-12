import React from "react";
import HeaderDisplay from "../../components/HeaderDisplay";
import KeyFeatures from "../../components/KeyFeatures";
import ProductDescription from "../../components/ProductDescription";
import Footer from "../../components/Footer";

const ProductLandingPage: React.FC = () => {
  return (
    <>
      <HeaderDisplay />
      <main>
        <KeyFeatures />
        <ProductDescription />
      </main>
      <Footer />
    </>
  );
};

export default ProductLandingPage;
