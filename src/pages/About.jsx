import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Ads from "../components/Ads";
import AboutUs from "../components/AboutUs";
import Trusted from "../components/Trusted";
import Visi from "../components/Visi";
import Directur from "../components/Directur";
import Program from "../components/Program";
import DetailBisnis from "../components/DetailBisnis";
import Report from "../components/Report";
import FraudNav from "../components/FraudNav";
import { Suspense } from "react";
import Loading from "../components/Loading";

const About = () => {
  return (
    <Suspense fallback={<Loading/>}>
      <Navbar />
      <FraudNav />
      <div className="flex justify-center mx-auto border">
        <AboutUs />
      </div>
      <Trusted />
      <Visi />
      <Directur />
      <Program />
      <DetailBisnis />
      <Report />
      <Ads />
      <Footer />
    </Suspense>
  );
};

export default About;
