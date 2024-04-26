import React from 'react';
import { Rating, Typography } from "@material-tailwind/react";

function StarRating({ value,}) {
  return (
    <div className="flex  items-center font-bold text-blue-gray-500">
      <Rating readonly value={value} />
      <Typography color="blue-gray" className="font-medium text-blue-gray-500">
        {value} & up
      </Typography>
    </div>
  );
}
export default StarRating