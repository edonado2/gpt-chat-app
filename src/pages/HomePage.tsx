import React, { useState } from 'react';
import { SearchBar } from '../ui';
import { Button, Text } from '@chakra-ui/react';
import { getResponse } from '../helpers/fetchResponse';

export const HomePage: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      const data = {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: search }],
        temperature: 0.7
      };

      // Make the API request
      const result = await getResponse('https://api.openai.com/v1/chat/completions', data);
      setResponse(result.choices[0].message.content);
      setError(null);
    } catch (err) {
      setError('An error occurred while fetching the response');
      setResponse(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      
      <h1>Welcome, I am your AI Super Assistant</h1>
      <form onSubmit={handleSearch}>
        <SearchBar search={search} setSearch={setSearch} />
        <Button
          colorScheme='blue'
          m={10}
          p={5}
          bg='tomato'
          type='submit'
          isLoading={loading}
        >
          Search
        </Button>
      </form>
      {response ? <Text mt={4}>Response: {response}</Text> : <Text mt={4}>Made by edonado</Text>}
      {error && <Text mt={4} color='red.500'>Error: {error}</Text>}
    </>
  );
};
