import React from 'react';

export const TabItem = ({ item, show }: { item: string; show?: boolean }) => {
  return (
    <div
      className={`tab-pane fade m-4 ${show ? 'show active' : ''} `}
      id={`pills-${item}Justify`}
      role="tabpanel"
      aria-labelledby={`pills-${item}-tabJustify`}
    >
      {item} content justify
    </div>
  );
};
