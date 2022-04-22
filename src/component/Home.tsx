import React from 'react';
import { Menu } from './Menu/Menu';
import { Sort } from './Sort/Sort';

export const Home = () => {
  return (
    <>
      <div className="flex p-10">
        <div className="w-1/4 p-4 m-5 bg-white">
          <Sort />
        </div>
        <div className="w-3/4 m-5 bg-white">
          <Menu />
        </div>
      </div>
    </>
  );
};
