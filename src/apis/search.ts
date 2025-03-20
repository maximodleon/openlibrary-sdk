import { BASE_URL } from '../constants/index.ts';
import { getProperty } from '../utils/index.ts';
import { type BookSearchParams, type BookSearchResponse, type AuthorData } from '../types/search-api.ts';

function buildSearchParams(params: BookSearchParams): URLSearchParams {
  const urlSearchParams = new URLSearchParams();

  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
       const value = getProperty(params, key as keyof BookSearchParams);
       if (value) {
         urlSearchParams.append(key, `${value}`);
       }
    }
  }

  return urlSearchParams;
}

export async function searchBook(params: BookSearchParams): Promise<BookSearchResponse> {
  const urlSearchParams = buildSearchParams(params);

  const url = new URL(`${BASE_URL}/search.json?${urlSearchParams}`);

  const options: RequestInit = {
    method: "GET",
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Error calling the API. Error code ${response.status}`); 
  }

  const data = await response.json();

  return data as BookSearchResponse;
}

export async function getIndividualAuthor(authorKey: string): Promise<AuthorData> {
  const url = new URL(`${BASE_URL}/authors/${authorKey}.json`);

  const options: RequestInit = {
    method: "GET",
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Error calling the API. Error code ${response.status}`); 
  }

  const data = await response.json();

  return data as AuthorData;
}
