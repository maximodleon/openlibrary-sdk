export type SearchParams = {
  q: string,
  fields?: any,
  sort?: string,
  lang?: string,
  offset?: number,
  limit?: number,
  page?: number
}

// TODO go the doc and add the correct list of fields
// from here https://github.com/internetarchive/openlibrary/blob/b4afa14b0981ae1785c26c71908af99b879fa975/openlibrary/plugins/worksearch/schemes/works.py#L38-L91
// these fields could be optional since from the query
// we can specify which one we wanr
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
  public_scan_b: boolean
}

export type SearchResponse = {
  start: number,
  nums_found: number,
  docs: SearchResponseDocument[]
}
