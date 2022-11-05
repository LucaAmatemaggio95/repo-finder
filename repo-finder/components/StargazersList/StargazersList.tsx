import { Person } from "@mui/icons-material";
import { Box, Divider, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { useRecoilValue } from "recoil";
import { repositoryAtom } from "../../state/atoms/repository";

const StargazersList = () => {
  const { stargazers } = useRecoilValue(repositoryAtom);

  return (
    <>
      <Typography variant="body1">Stargazers</Typography>
      {stargazers.edges.length === 0 && (
        <Box my={2}>
          <Typography textAlign={"center"}>
            There are no stargazers here! :(
          </Typography>
        </Box>
      )}
      <List>
        {stargazers.edges.map((item, index) => (
          <ListItem key={index}>
            <Box display={"flex"} alignItems={"center"}>
              <Box mr={1} display={"flex"}>
                <Person />
              </Box>
              <Typography variant="body1" fontWeight={500}>
                {item.node.name || "???"}
              </Typography>
              <Box ml={2}>
                <Typography variant="body2">
                  Followers:{` ${item.node.followers.totalCount}`}
                </Typography>
              </Box>
            </Box>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default StargazersList;
