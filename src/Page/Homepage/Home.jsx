import React from 'react';
import HeroSection from './HeroSection';
import FeatureCategories from './FeatureCategories';
import PopularProducts from './PopularProducts';
import PartnerMarquee from './Partners';

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <FeatureCategories></FeatureCategories>
      <PopularProducts></PopularProducts>
      <PartnerMarquee></PartnerMarquee>
    </div>
  );
};

export default Home;