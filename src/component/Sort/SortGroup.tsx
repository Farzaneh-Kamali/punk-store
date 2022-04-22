import React from 'react';

export const SortGroup = ({
  name,
  children,
}: {
  name: string;
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <div className="my-2">
      <h2>{name}</h2>
      {children}
    </div>
  );
};
