import React from 'react';

export const SortItems = ({
  group,
  label,
}: {
  group: string;
  label: string;
}) => {
  return (
    <div className="form-check">
      <input
        className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
        type="radio"
        name={group}
        id={`${group}${label}`}
      />
      <label
        className="inline-block text-sm text-gray-800 form-check-label"
        htmlFor={`${group}${label}`}
      >
        {label}
      </label>
    </div>
  );
};
