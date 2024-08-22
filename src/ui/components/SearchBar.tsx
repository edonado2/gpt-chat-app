import { Input } from '@chakra-ui/react'
import { useState } from 'react'
export const SearchBar = () => {

  const [search, setSearch] = useState<string>('')
  return (
    <>
      <Input 
        placeholder='How can I help you today?'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />
    </>
  )
}
