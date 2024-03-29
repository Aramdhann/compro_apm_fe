import React, { lazy, Suspense } from "react";
const ModalHome = lazy(() => import("../components/ModalHome"));
const Navbar = lazy(() => import("../components/Navbar"));
const FraudNav = lazy(() => import("../components/FraudNav"));
const Hero = lazy(() => import("../components/Hero"));
const Trusted = lazy(() => import("../components/Trusted"));
const Why = lazy(() => import("../components/Why"));
const QuickStep = lazy(() => import("../components/QuickStep"));
const Milestone = lazy(() => import("../components/Milestone"));
const Ads = lazy(() => import("../components/Ads"));
const ServiceHour = lazy(() => import("../components/ServiceHour"));
const Footer = lazy(() => import("../components/Footer"));

import Loading from "../components/Loading";

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ModalHome />
      <Navbar />
      <FraudNav />
      <Hero />
      <Trusted />
      <Why />
      <QuickStep />
      <Milestone />
      <Ads />
      <ServiceHour />
      <Footer />
    </Suspense>
  );
};

export default Home;
