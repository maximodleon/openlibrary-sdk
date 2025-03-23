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

// Author search types 
type AuthorSearchResponseDocument = {
  name: string,
  alternate_names?: string[],
  birth_date?: string,
  key: string,
  top_subjects?: string[],
  top_works?: string,
  type: string,
  work_count: number,
  ratings_average: number,
  ratings_sortable: number,
  ratings_count: number,
  ratings_count_1: number,
  ratings_count_2: number,
  ratings_count_3: number,
  ratings_count_4: number,
  ratings_count_5: number,
  want_to_read_count: number,
  already_read_count: number,
  currently_reading_count: number,
  readinglog_count: number,
  _version_: number
}

export type AuthorSearchResponse = {
  num_found: number,
  start: number,
  numFoundExact: boolean,
  docs: AuthorSearchResponseDocument[]
}


// subject search types

type Work = {
  key: string,
  title: string,
  edition_count: number,
  cover_id: number,
  cover_edition_key: string,
  subject: string[],
  ia_collection: string[],
  printdisabled: boolean,
  lending_edition: string,
  lending_identifier: string,
  authors: [{
    key: string,
    name: string
  }],
  first_publish_year: number,
  ia: string,
  public_sacn: boolean,
  has_fulltext: boolean,
  availability: {
    status: string,
    available_to_browse: boolean,
    available_to_borrow: boolean,
    available_to_waitlist: boolean ,
    is_printdisabled: boolean,
    is_readable: boolean,
    is_lendable: boolean,
    is_previewable: boolean,
    identifier: string,
    isbn?: string,
    oclc?: string,
    openlibrary_work: string,
    openlibrary_edition: string,
    last_loan_date?: string,
    num_waitlist?: string,
    last_waitlist_date?: string,
    is_restricted: boolean,
    is_browseable: boolean,
  }
}

export type SubjectSearchResponse = {
  key: string,
  name: string,
  subject_type: string,
  works_count: number,
  works: Work[]
}

// specific author types
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
