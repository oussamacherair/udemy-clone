import React, { useState } from 'react';
import { Checkbox } from "@material-tailwind/react";

const languageMapping = {
  en: 'English',
  es: 'Spanish',
  fr: 'French',
  de: 'German',
  it: 'Italian',
  pt: 'Portuguese',
  ru: 'Russian',
  ja: 'Japanese',
  zh: 'Chinese',
  ar: 'Arabic',
  // Add more language codes and names as needed
};

function LanguageFilter({language}) {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleLanguageChange = (value) => {
    language(value)
    setSelectedLanguage(value === selectedLanguage ? null : value);
  };

  const languageOptions = Object.keys(languageMapping);

  return (
    <div className="mb-4">
      <h1 className="text-lg font-semibold mb-2">Language</h1>
      <div className="space-y-2">
        {languageOptions.map((langCode) => (
          <LanguageOption
            key={langCode}
            value={langCode}
            label={languageMapping[langCode]}
            checked={langCode === selectedLanguage}
            onChange={handleLanguageChange}
          />
        ))}
      </div>
    </div>
  );
}

// LanguageOption component for each language value
function LanguageOption({ value, label, checked, onChange }) {
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

export default LanguageFilter;
