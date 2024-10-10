import React, { useState } from 'react';
import { NavOptions, NavOptionType } from '../NavOptions';
import SearchBar from '../SearchBar';

const SearchSection: React.FC = () => {
  const [activeOption, setActiveOption] = useState<NavOptionType>('숙소');

  const onOptionChange = (option: NavOptionType) => {
    setActiveOption(option);
  };

  return (
    <div>
      <NavOptions onOptionChange={onOptionChange} />
      <SearchBar activeOption={activeOption} />
    </div>
  );
};

export default SearchSection;
