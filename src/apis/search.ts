import { type SearchParams } from '../types/search-api.ts'

export function getTitle(params: SearchParams) {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append('q', params.q);

  const url = new URL(`https://openlibrary.org/search.json?${urlSearchParams}`);

  const options: RequestInit = {
    method: "GET",
  }

  return fetch(url, options);
}
