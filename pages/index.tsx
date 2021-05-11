import React from 'react';
import dynamic from 'next/dynamic';

/**
 * We need dynamic import here otherwise it fails on SSR rendering
 * because of accessing web apis (localStorage)
 */
const Main = dynamic(() => import('../src/components/MainPage/MainPage'), {
  ssr: false,
});

const MainPage = () => {
  return <Main />;
};

MainPage.displayName = 'MainPage';
export default MainPage;
