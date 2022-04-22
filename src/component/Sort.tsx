import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import React from 'react';

export const Sort = () => {
  return (
    <>
      <FontAwesomeIcon icon={solid('arrow-down-wide-short')} className="mb-2" />
      <hr />
      <div className="flex flex-col ">
        <div className="my-2">
          <h2>Abv</h2>
          <div className="form-check">
            <input
              className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
              type="radio"
              name="abvSortRadio"
              id="abvNone"
            />
            <label
              className="inline-block text-sm text-gray-800 form-check-label"
              htmlFor="abvNone"
            >
              None
            </label>
          </div>
          <div className="form-check">
            <input
              className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
              type="radio"
              name="abvSortRadio"
              id="abvAssending"
            />
            <label
              className="inline-block text-sm text-gray-800 form-check-label"
              htmlFor="abvAssending"
            >
              Assending
            </label>
          </div>
          <div className="form-check">
            <input
              className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
              type="radio"
              name="abvSortRadio"
              id="abvDessending"
            />
            <label
              className="inline-block text-sm text-gray-800 form-check-label"
              htmlFor="abvDessending"
            >
              Dessending
            </label>
          </div>
        </div>
        <hr />
        <div className="my-2">
          <h2>Name</h2>
          <div className="form-check">
            <input
              className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
              type="radio"
              name="nameSortRadio"
              id="nameNone"
            />
            <label
              className="inline-block text-sm text-gray-800 form-check-label"
              htmlFor="nameNone"
            >
              None
            </label>
          </div>
          <div className="form-check">
            <input
              className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
              type="radio"
              name="nameSortRadio"
              id="nameAssending"
            />
            <label
              className="inline-block text-sm text-gray-800 form-check-label"
              htmlFor="nameAssending"
            >
              A to Z
            </label>
          </div>
          <div className="form-check">
            <input
              className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
              type="radio"
              name="nameSortRadio"
              id="nameDessending"
            />
            <label
              className="inline-block text-sm text-gray-800 form-check-label"
              htmlFor="nameDessending"
            >
              Z to A
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
