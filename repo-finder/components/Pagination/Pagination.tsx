import {
  FirstPage,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  LastPage
} from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { searchAtom } from "../../state/atoms/search";
import useQuery from "../../utils/useQuery";
import axios from "../../utils/axios";
import { pageAtom, repositoryAtom } from "../../state/atoms/repository";

const Pagination = () => {
  const page = useRecoilValue(pageAtom);
  const { owner, repo } = useRecoilValue(searchAtom);
  const setRepositoryAtom = useSetRecoilState(repositoryAtom);

  const handleClickPage = (pageType: string) => {
    let cursor = "";

    if (pageType === "next") {
      cursor = page.endCursor;
    }

    if (pageType === "previous") {
      cursor = page.startCursor;
    }

    const pageQuery = useQuery(owner, repo, pageType, cursor);
    axios
      .post("", JSON.stringify({ query: pageQuery }))
      .then(res => setRepositoryAtom(res.data.data.repository));
  };

  return (
    <Box display={"flex"} justifyContent={"center"}>
      {page.hasPreviousPage && (
        <>
          <IconButton onClick={() => handleClickPage("first")}>
            <FirstPage />
          </IconButton>
          <IconButton onClick={() => handleClickPage("previous")}>
            <KeyboardArrowLeft />
          </IconButton>
        </>
      )}
      {page.hasNextPage && (
        <>
          <IconButton onClick={() => handleClickPage("next")}>
            <KeyboardArrowRight />
          </IconButton>
          <IconButton onClick={() => handleClickPage("last")}>
            <LastPage />
          </IconButton>
        </>
      )}
    </Box>
  );
};

export default Pagination;
