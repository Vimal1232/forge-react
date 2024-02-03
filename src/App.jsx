import React from "react";
import {
  Navbar,
  Home,
  Aboutus,
  Services,
  HWW,
  Testi,
  Faq,
  Contactus,
  Footer,
} from "./Components/index";

const App = () => {
  return (
    <div className="overflow-hidden bg-textblack">
      <div className="px-6 py-8 bg-textblack w-full ">
        <Navbar />
      </div>
      <div className="bg-textblack p-10">
        <Home />
      </div>
      <div className="mb-20">
        <Aboutus />
      </div>
      <div className="pt-20 mb-20">
        <Services />
      </div>
      <div className="pt-20 mb-20">
        <HWW />
      </div>
      <div className="pt-20 mb-20">
        <Testi />
      </div>
      <div className="pt-20 mb-20">
        <Faq />
      </div>
      <div className="pt-20 mb-20">
        <Contactus />
      </div>
      <div className="pt-20 mb-8 ">
        <Footer />
      </div>
    </div>
  );
};

export default App;
