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
import FadeIn from "@/Shared/FadeIn";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <FadeIn>
        <AnnouncementBar></AnnouncementBar>
      </FadeIn>
      <FadeIn>
        <FeatureCategories></FeatureCategories>
      </FadeIn>

      <FadeIn>
        <PopularProducts></PopularProducts>
      </FadeIn>
      <FadeIn>
        <HowItWork></HowItWork>
      </FadeIn>
      <FadeIn>
        <VideoSection></VideoSection>
      </FadeIn>
      <FadeIn>
        <WhyChooseUs></WhyChooseUs>
      </FadeIn>

      <FadeIn>
        <PartnerMarquee></PartnerMarquee>
      </FadeIn>

      <FadeIn>
        <ReviewSection></ReviewSection>
      </FadeIn>
      <FadeIn>
        <DynamicCounters></DynamicCounters>
      </FadeIn>
    </div>
  );
};

export default Home;
