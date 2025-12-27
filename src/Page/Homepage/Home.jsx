import React from "react";
import HeroSection from "./HeroSection";
import FeatureCategories from "./FeatureCategories";
import PopularProducts from "./PopularProducts";
import PartnerMarquee from "./Partners";
import WhyChooseUs from "./WhyChooseUs";
import AnnouncementBar from "./AnnouncementBar";
import HowItWork from "./HowItWork";
import DynamicCounters from "./DynamicCounters";
import VideoSection from "./VideoSection";
import ReviewSection from "./ReviewSection";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <AnnouncementBar></AnnouncementBar>
      <FeatureCategories></FeatureCategories>
      <PopularProducts></PopularProducts>
      <HowItWork></HowItWork>
      <VideoSection></VideoSection>
      <WhyChooseUs></WhyChooseUs>
      <PartnerMarquee></PartnerMarquee>
      <ReviewSection></ReviewSection>
      <DynamicCounters></DynamicCounters>
    </div>
  );
};

export default Home;
