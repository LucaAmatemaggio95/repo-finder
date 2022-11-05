export type Repository = {
  name: string;
  nameWithOwner: string;
  stargazerCount: number;
  stargazers: {
    edges: Stargazer[];
    pageInfo: PageInfo;
  };
};

type Stargazer = {
  cursor: string;
  node: {
    followers: {
      totalCount: number;
    };
    name: string | null;
  };
};

type PageInfo = {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
  endCursor: string;
};
