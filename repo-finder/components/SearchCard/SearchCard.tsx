import {
  Card,
  CardContent,
  Stack,
  TextField,
  Box,
  Button
} from "@mui/material";
import axios from "../../utils/axios";
import React, { FormEvent, MutableRefObject, useRef } from "react";
import { useSetRecoilState } from "recoil";
import { repositoryAtom } from "../../state/atoms/repository";
import { searchAtom } from "../../state/atoms/search";
import useQuery from "../../utils/useQuery";

const SearchCard = () => {
  const refRepoName = useRef() as MutableRefObject<HTMLInputElement>;
  const refRepoOwner = useRef() as MutableRefObject<HTMLInputElement>;

  const setRepositoryAtom = useSetRecoilState(repositoryAtom);
  const setSearchAtom = useSetRecoilState(searchAtom);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const owner = refRepoOwner.current.value;
    const repo = refRepoName.current.value;

    setSearchAtom({ owner: owner, repo: repo });

    const pageQuery = useQuery(owner, repo, "first");

    axios.post("", JSON.stringify({ query: pageQuery })).then(res => {
      setRepositoryAtom(res.data.data.repository);
    });
  };

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3} my={3}>
            <TextField
              label="Repository name"
              name="repoName"
              required
              inputRef={refRepoName}
            />
            <TextField
              label="Repository owner"
              name="repoOwner"
              required
              inputRef={refRepoOwner}
            />
          </Stack>
          <Box display={"flex"} justifyContent={"center"}>
            <Button variant={"contained"} color={"primary"} type={"submit"}>
              Search
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};

export default SearchCard;
