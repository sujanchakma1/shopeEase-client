import React from 'react';
import HeroSection from './HeroSection';
import FeatureCategories from './FeatureCategories';
import PopularProducts from './PopularProducts';
import PartnerMarquee from './Partners';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <FeatureCategories></FeatureCategories>
      <PopularProducts></PopularProducts>
      <WhyChooseUs></WhyChooseUs>
      <PartnerMarquee></PartnerMarquee>
    </div>
  );
};

export default Home;