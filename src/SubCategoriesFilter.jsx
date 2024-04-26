import React, { useState } from 'react';
import { Checkbox } from "@material-tailwind/react";

function SubCategoriesFilter({ categories,subCategory}) {
  const [checkedIndex, setCheckedIndex] = useState(-1);

  const handleCheckboxChange = (index,value) => {
    setCheckedIndex(index === checkedIndex ? -1 : index);
    subCategory(value)
  };

  return (
    <div>
      <div className='flex flex-col text-sm label'>
        {categories?.map(({ id, title }, index) => (
          <Checkbox
            key={id}
            ripple={false}
            checked={index === checkedIndex}
            onChange={() => handleCheckboxChange(index,title)}
            className="h-4 w-4 p-0 m-0 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0 bg-white"
            label={title}
          />
        ))}
      </div>
    </div>
  );
}

export default SubCategoriesFilter;