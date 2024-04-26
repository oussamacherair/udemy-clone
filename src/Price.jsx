import React, { useState } from 'react';
import { Checkbox } from "@material-tailwind/react";

function PriceFilter({price}) {
  const [selectedPrices, setSelectedPrices] = useState('');

  const handlePriceChange = (value) => {
    setSelectedPrices(value);
    price(value)
  };

  const priceOptions = [
    { value: 'price-free', label: 'Price Free' },
    { value: 'price-paid', label: 'Price Paid' },
  ];
  
  return (
    <div className="mb-4">
      <div className="space-y-2">
        {priceOptions.map((option) => (
          <PriceOption
            key={option.value}
            value={option.value}
            label={option.label}
            checked={selectedPrices === option.value}
            onChange={handlePriceChange}
          />
        ))}
      </div>
    </div>
  );
}

// PriceOption component for each price value
// PriceOption component for each price value
function PriceOption({ value, label, checked, onChange }) {
  return (
    <div className="flex items-center">
      <Checkbox
        id={value}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
      />
      <label htmlFor={value} className="text-sm ml-2">
        {label}
      </label>
    </div>
  );
}


export default PriceFilter;
