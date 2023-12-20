import React from "react";
import {
  Navbar,
  Hero,
  Feature,
} from "./components";
import Result from "./components/result";
const App = () => (
  <div className="w-full bg-primary-hero-bluecolor">
    <Navbar />
    <Hero />
    <div className="bg-primary-mainbody-bluecolor">
      <div className=" px-4 py-4 md:px-16 md:py-8">
        <Feature />
      </div>
    </div>
  </div>
);
export default App;