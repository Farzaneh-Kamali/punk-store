import React from 'react';
import { MenuItems } from './MenuItems';
import { TabItem } from './TabItem';

export const Menu = () => {
  return (
    <>
      <ul
        className="flex flex-col flex-wrap pl-0 mb-4 list-none nav nav-pills nav-justified md:flex-row"
        id="pills-tabJustify"
        role="tablist"
      >
        <MenuItems item="All" />
        <MenuItems item="Pizza" />
        <MenuItems item="Steak" />
      </ul>
      <div className="tab-content" id="pills-tabContentJustify">
        <TabItem item="All" />
        <TabItem item="Pizza" />
        <TabItem item="Steak" />
      </div>
    </>
  );
};
