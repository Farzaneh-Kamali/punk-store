import React from 'react';

export const TabItem = ({ item }: { item: string }) => {
  return (
    <div
      className="tab-pane fade show active"
      id={`pills-${item}Justify`}
      role="tabpanel"
      aria-labelledby={`pills-${item}-tabJustify`}
    >
      Tab 1 content justify
    </div>
  );
};
