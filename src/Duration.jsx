// DurationFilter.js
import React, { useState} from 'react';
import { Checkbox } from "@material-tailwind/react";

function DurationFilter({ duration,filterData}) {
  const [selectedDuration, internalSetSelectedDuration] = useState(null);

  const handleDurationChange = (value) => {
    internalSetSelectedDuration(value);
    duration(value)
  };

  const durationOptions = [
    { value: 'short', label: 'Short' },
    { value: 'medium', label: 'Medium' },
    { value: 'long', label: 'Long' },
    { value: 'extraLong', label: 'Extra Long' },
  ];

  return (
    <div className="mb-4">
      <div className="space-y-2">
        {durationOptions.map((option) => (
          <DurationOption
            key={option.value}
            value={option.value}
            label={option.label}
            checked={selectedDuration === option.value}
            onChange={handleDurationChange}
          />
        ))}
      </div>
    </div>
  );
}

function DurationOption({ value, label, checked, onChange }) {
  return (
    <div className="flex items-center">
      <Checkbox
        color="lightBlue"
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

export default DurationFilter;
