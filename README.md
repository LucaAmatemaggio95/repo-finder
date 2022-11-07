# How to run

Type inside the terminal

- `cd repo-finder`
- `npm install` to install all the dpendencies

Then inside the root folder create a `.env` file with the following variables

- `GITHUB_ID`: ID coming form the GitHub OAuth app
- `GITHUB_SECRET`: SECRET coming from the GitHub OAuth app
- `NEXTAUTH_URL`: The URL used by next-auth (http://localhost:3000)
- `NEXTAUTH_SECRET`: SECRET coming from the GitHub OAuth app
- `GITHUB_PAT`: Personal Access Token created inside GitHub, needed for the GraphQL API

The `GITHUB_ID` and the `GITHUB_SECRET` can be obtained inside GitHub > Profile > Settings > Developer settings > OAuth apps > create new

Furthermore: `next-auth` needs a specific callback url with the following pattern

> /api/auth/callback/[provider] (github in our case)

these are needed from next-auth to authenticate the user against the GitHub OAuth flow

The `GITHUB_PAT` can be obtained from the same path, just go into Personal Access Token
Note: the PAT must have these permission to work with GraphQL

> - repo
> - read:packages
> - read:org
> - read:public_key
> - read:repo_hook
> - user
> - read:discussion
> - read:enterprise
> - read:gpg_key

once you have all set up you can go back into the terminal and type `npm run dev`

# How it works

the user can only log-in by clicking on the login button on the `/` route

`next-auth` will redirect the user to the GitHub login page where the user can log-in by using a personal account

the user is then redirected back to `/finder`: here is possible to searchfor a repository by specifing the repo name and the repo owner

once the fields are filled in, the search button perform a GraphQL query that returns all the stargazers for a specific repository

The user can the navigate through the pages with the navigation buttons below the list

# Comments

I really enjoyed working on this task as I discovered new technologies I never tried before (GrapQL, pretty cool!): unfortunately I could not complete all the requests as I cannot find a way to order the stargazers directly inside the GraphQL query, maybe I am missing something

I had to use the GrapQL instead of normal REST because the results for the stargazers list and the followers list are http endpoint where I should have done another N requests to obtain all the data needed (and probably they would not be orderable as well) and it seemed to me that this solution was not the nicest one

Unfortunately I cannot use the same access token from the OAuth: GitHub suggest to create a PAT to access the GraphQL API, maybe with a GitHub App we could have done it as well

Unfortunately(2) GrapQL cannot be filtered (some users are null) -> also orderBy cannot be applied to the totalCount of the followers
Maybe it can be done but this was the first time using this kind of stuff so probably I'm just missing something

There are still some small details that can be done to improve the app (form submission can be done with react-form-hooks and maybe we could display an error if the repository does not exist)

Total time spent:

- 2 hrs Thursday
- 3 hrs Friday
- 8 hrs Saturday

I hope this is not too much higher that the time to completion you expected
