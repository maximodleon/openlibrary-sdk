export type BookSearchParams = {
  q: string,
  title?: string,
  author?: string,
  subject?: string,
  place?: string,
  person?: string,
  publisher?: string,
  fields?: string,
  sort?: string,
  lang?: string,
  offset?: number,
  limit?: number,
  page?: number
}

// Full list of field here https://github.com/internetarchive/openlibrary/blob/b4afa14b0981ae1785c26c71908af99b879fa975/openlibrary/plugins/worksearch/schemes/works.py#L38-L91
// these fields could be optional since from the query we can specify which one we want
type BookSearchResponseDocument = {
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

export type BookSearchResponse = {
  start: number,
  nums_found: number,
  docs: BookSearchResponseDocument[]
}

type AuthorRemoteIds = {
  viaf: string,
  gooreads: string,
  storygraph: string,
  isni: string,
  librarything: string,
  amazon: string,
  wikidata: string
}

type AuthorMetadata = {
  type: string,
  value: string
}

export type  AuthorData = {
  personal_name: string,
  key: string,
  entity_type: string,
  birth_date: string,
  links: string[],
  alternate_names: string[],
  name: string,
  title: string,
  bio: string,
  fuller_name: string,
  source_records: string[],
  remote_ids: AuthorRemoteIds,
  latest_revision: number,
  revision: number,
  created: AuthorMetadata,
  last_modified: AuthorMetadata,
}
