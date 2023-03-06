import React from 'react';
import { useFetch } from '../hooks/useFetch';

export function Fetch() {
    const [loading, apiData, error] = useFetch("https://jsonplaceholder.typihsdfcode.com/posts/1");

  return (
    <div>
      <h2>Fetching data with Axios</h2>
      {loading && <p>Loading......</p>}
      {!loading && error && <p>Error in fetching the data</p>}
      {!loading && !error && <p>{JSON.stringify(apiData)}</p>}
    </div>
  )
}
