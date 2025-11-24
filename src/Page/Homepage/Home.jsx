import React from 'react';
import HeroSection from './HeroSection';
import { Partners } from './Partners';
import FeatureCategories from './FeatureCategories';

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <FeatureCategories></FeatureCategories>
      <Partners></Partners>
    </div>
  );
};

export default Home;