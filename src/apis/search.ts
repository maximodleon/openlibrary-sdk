import { type SearchParams, type SearchResponse } from '../types/search-api.ts';
import { BASE_URL } from '../constants/index.ts';

export async function getTitle(params: SearchParams): Promise<SearchResponse> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append('q', params.q);

  const url = new URL(`${BASE_URL}/search.json?${urlSearchParams}`);

  const options: RequestInit = {
    method: "GET",
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Error calling the API. Error code ${response.status}`); 
  }

  const data = await response.json();

  return data as SearchResponse;
}
