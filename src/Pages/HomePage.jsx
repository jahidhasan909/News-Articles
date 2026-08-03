import React from 'react';
import HeroBanner from '../Components/HeroBanner/HeroBanner';
import HomeMainContent from '../Components/HomeMainContent/HomeMainContent';
import { useArticles } from '../hooks/useArticles';

const HomePage = () => {
  const articleState = useArticles();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <HeroBanner />
      <HomeMainContent articleState={articleState} />
    </div>
  );
};

export default HomePage;