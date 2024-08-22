import { Input } from '@chakra-ui/react';
import React from 'react';

interface SearchBarProps {
  search: string;
  setSearch: (search: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch }) => {
  return (
    <Input 
      placeholder='How can I help you today?'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};
