import React, { useState } from 'react';
import { Checkbox } from "@material-tailwind/react";

function LevelFilter({ level}) {
  const [selectedLevel, setSelectedLevel] = useState(null);

  const handleLevelChange = (value) => {
    level(value)
    if (selectedLevel === value) {
      setSelectedLevel(null); // Uncheck the currently selected checkbox
    } else {
      setSelectedLevel(value);
    }
  };

  const levelOptions = ['all', 'beginner', 'intermediate', 'expert']; // Change to lowercase

  return (
    <div className="mb-4">
      <div className="space-y-2">
        {levelOptions.map((level) => (
          <LevelOption
            key={level}
            value={level}
            checked={selectedLevel === level}
            onChange={handleLevelChange}
          />
        ))}
      </div>
    </div>
  );
}

// LevelOption component for each level value
function LevelOption({ value, checked, onChange }) {
  const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);

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
        {capitalizedValue}
      </label>
    </div>
  );
}

export default LevelFilter;
