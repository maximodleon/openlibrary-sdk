export type SearchParams = {
  q: string,
  fields?: string,
  sort?: string,
  lang?: string,
  offset?: number,
  limit?: number,
  page?: number
}

// Full list of field here https://github.com/internetarchive/openlibrary/blob/b4afa14b0981ae1785c26c71908af99b879fa975/openlibrary/plugins/worksearch/schemes/works.py#L38-L91
// these fields could be optional since from the query we can specify which one we want
type SearchResponseDocument = {
  cover_i: number,
  has_fulltext: boolean,
  edition_count: number,
  title: string,
  author_name: string[],
  first_published_year: number,
  key: string,
  ia: string[], // item availability (ia)
  author_key: string[],
  public_scan_b: boolean,
  isbn: string,
  subject: string,
  publisher: string,
  language: string
}

export type SearchResponse = {
  start: number,
  nums_found: number,
  docs: SearchResponseDocument[]
}
