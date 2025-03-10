import { type SearchParams } from '../types/search-api.ts'

export function getTitle(params: SearchParams) {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append('q', params.q);
  urlSearchParams.append('fields', params.fields);

  const url = new URL(`https://openlibrary.org/search.json?${urlSearchParams}`);

  const options: RequestInit = {
    method: "GET",
  }

  return fetch(url, options);
}
