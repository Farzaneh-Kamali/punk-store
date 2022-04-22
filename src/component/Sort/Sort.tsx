import React from 'react';
import { SortItems } from './SortItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { SortGroup } from './SortGroup';

export const Sort = () => {
  return (
    <>
      <FontAwesomeIcon icon={solid('arrow-down-wide-short')} className="mb-2" />
      <hr />
      <div className="flex flex-col ">
        <SortGroup name="Abv">
          <SortItems group="abvSortRadio" label="None" />
          <SortItems group="abvSortRadio" label="Assending" />
          <SortItems group="abvSortRadio" label="Dessending" />
        </SortGroup>
        <hr />
        <SortGroup name="Name">
          <SortItems group="nameSortRadio" label="None" />
          <SortItems group="nameSortRadio" label="A-Z" />
          <SortItems group="nameSortRadio" label="Z-A" />
        </SortGroup>
      </div>
    </>
  );
};
