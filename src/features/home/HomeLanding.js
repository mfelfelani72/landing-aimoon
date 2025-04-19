import React, { lazy } from 'react';

// Components

const LazyHeader = lazy(() => import('../header/Header'));
const LazyWelcome = lazy(() => import("./containers/Welcome"));
const LazyWhyAimoonhub = lazy(() => import("./containers/WhyAimoonhub"));
const LazyHowToWork = lazy(() => import("./containers/HowToWork"));
const LazyAimoonhubStatistics = lazy(() => import("./containers/AimoonhubStatistics"));
const LazyCustomerReview = lazy(() => import("./containers/CustomerReview"));
const LazyPlans = lazy(() => import("./containers/Plans"));
const LazyLatestNews = lazy(() => import("./containers/LatestNews"));
const LazyContactUs = lazy(() => import("./containers/ContactUs"));
const LazyFAQ = lazy(() => import("./containers/FAQ"));
const LazyFooter = lazy(() => import('../footer/Footer'));

const Home = () => {
  return (
    <>
      {/* Header */}
      <LazyHeader />
      <div className="fixed inset-y-0 left-0  w-[calc(50%-50rem)] bg-white z-[100]"></div>
      <div className="fixed inset-y-0 right-0 w-[calc(50%-50rem)] bg-white z-[100]"></div>

      <div className="flex flex-col mt-[6rem]">
        {/* Welcome */}
        <LazyWelcome />
        {/* WhyAimoonhub */}
        <LazyWhyAimoonhub />
        {/* HowToUse */}
        <LazyHowToWork />
        {/* Aimoonhub statistics */}
        <LazyAimoonhubStatistics />
        {/* Customer review  */}
        <LazyCustomerReview />
        {/* Plans */}
        <LazyPlans />
        {/* Latest news */}
        <LazyLatestNews />
        {/* FAQ */}
        <LazyFAQ />
        {/* Contact us */}
        <LazyContactUs />
        {/* Header */}
        <LazyFooter />
      </div>
    </>
  );
};

export default Home;
