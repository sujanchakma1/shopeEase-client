import React from 'react';
import HeroSection from './HeroSection';
import { Partners } from './Partners';
import FeatureCategories from './FeatureCategories';
import PopularProducts from './PopularProducts';

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <FeatureCategories></FeatureCategories>
      <PopularProducts></PopularProducts>
      <Partners></Partners>
    </div>
  );
};

export default Home;