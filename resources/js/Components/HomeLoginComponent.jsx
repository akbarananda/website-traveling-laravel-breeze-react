import React from "react";
import SearchComponent from "./SearchComponent";
import PromoComponent from "./PromoComponent";
import PopularComponent from "./PopularComponent";
import RecomendComponent from "./RecomendComponent";
import AdventureComponent from "./AdventureComponent";
import PopularContent from "./PopularContent";
import FooterComponent from "./FooterComponent";
import Footer2Component from "./Footer2Component";
import NavbarLoginComponent from "./NavbarLoginComponent";

const HomeLoginComponent = () => {
  return (
    <div>
      <NavbarLoginComponent />
      <SearchComponent />
      <PromoComponent />
      <PopularComponent />
      <RecomendComponent />
      <AdventureComponent />
      <PopularContent />
      <FooterComponent />
      <Footer2Component />
    </div>
  );
};

export default HomeLoginComponent;
