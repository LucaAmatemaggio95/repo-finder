export default function useQuery(owner, repo, queryType, cursor = "") {
  switch (queryType) {
    case "first":
      return `{
                repository(owner: "${owner}", name: "${repo}") {
                    name
                    nameWithOwner
                    stargazerCount
                    stargazers(first: 10) {
                        edges {
                            cursor
                            node {
                                followers {
                                    totalCount
                                }
                                name
                            }
                        }
                        pageInfo {
                            hasNextPage
                            hasPreviousPage
                            startCursor
                            endCursor
                        }
                    }
                }
              }`;
    case "last":
      return `{
                repository(owner: "${owner}", name: "${repo}") {
                    name
                    nameWithOwner
                    stargazerCount
                    stargazers(last: 10) {
                        edges {
                            cursor
                            node {
                                followers {
                                    totalCount
                                }
                                name
                            }
                        }
                        pageInfo {
                            hasNextPage
                            hasPreviousPage
                            startCursor
                            endCursor
                        }
                    }
                }
              }`;
    case "next":
      return `{
                repository(owner: "${owner}", name: "${repo}") {
                    name
                    nameWithOwner
                    stargazerCount
                    stargazers(first: 10, after: "${cursor}") {
                        edges {
                            cursor
                            node {
                                followers {
                                    totalCount
                                }
                                name
                            }
                        }
                        pageInfo {
                            hasNextPage
                            hasPreviousPage
                            startCursor
                            endCursor
                        }
                    }
                }
              }`;
    case "previous":
      return `{
                repository(owner: "${owner}", name: "${repo}") {
                    name
                    nameWithOwner
                    stargazerCount
                    stargazers(first: 10, before: "${cursor}") {
                        edges {
                            cursor
                            node {
                                followers {
                                    totalCount
                                }
                                name
                            }
                        }
                        pageInfo {
                            hasNextPage
                            hasPreviousPage
                            startCursor
                            endCursor
                        }
                    }
                }
              }`;
    default:
      return `{
                repository(owner: "${owner}", name: "${repo}") {
                    name
                    nameWithOwner
                    stargazerCount
                    stargazers(first: 10) {
                        edges {
                            cursor
                            node {
                                followers {
                                    totalCount
                                }
                                name
                            }
                        }
                        pageInfo {
                            hasNextPage
                            hasPreviousPage
                            startCursor
                            endCursor
                        }
                    }
                }
              }`;
  }
}
