export function getTitle(q: string) {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append('q', q);

  const url = new URL(`https://openlibrary.org/search.json?${urlSearchParams}`);

  const options: RequestInit = {
    method: "GET",
  }

  return fetch(url, options);
}
