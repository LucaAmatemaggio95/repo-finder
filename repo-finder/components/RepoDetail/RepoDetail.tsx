import { Star } from "@mui/icons-material";
import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { useRecoilValue } from "recoil";
import { repositoryAtom } from "../../state/atoms/repository";
import Pagination from "../Pagination/Pagination";
import StargazersList from "../StargazersList/StargazersList";

const RepoDetail = () => {
  const repository = useRecoilValue(repositoryAtom);

  return (
    <>
      {repository?.name && (
        <Card>
          <CardContent>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography variant="h6">{repository.nameWithOwner}</Typography>
              <Box display={"flex"} alignItems={"center"}>
                <Typography variant="body1">
                  {repository.stargazerCount}
                </Typography>
                <Box display={"flex"} ml={1}>
                  <Star />
                </Box>
              </Box>
            </Box>
            <StargazersList />
            <Pagination />
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default RepoDetail;
