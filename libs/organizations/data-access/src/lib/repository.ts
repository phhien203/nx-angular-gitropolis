export interface Repository {
  readonly description: string;
  readonly name: string;
  readonly organization: string;
  readonly topics: readonly string[];
}

export type Repositories = readonly Repository[];
