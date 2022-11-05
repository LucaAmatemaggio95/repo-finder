import { Box, Grid } from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import RepoDetail from "../../components/RepoDetail/RepoDetail";
import SearchCard from "../../components/SearchCard/SearchCard";

const FinderPage = () => {
  const router = useRouter();

  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/");
    }
  });

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Box display={"flex"} justifyContent={"start"} m={3}>
            <SearchCard />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box m={3}>
            <RepoDetail />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default FinderPage;
