import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Toolbar,
  Typography
} from "@mui/material";
import React from "react";

const index = () => {
  return (
    <>
      <Toolbar />
      <Box display={"flex"} justifyContent={"center"}>
        <Card>
          <CardContent>
            <Typography variant="body1" gutterBottom fontWeight={500}>
              We need some basic info to find the repository
            </Typography>
            <Stack spacing={3} my={3}>
              <TextField label="Repository name" />
              <TextField label="Repository owner" />
            </Stack>
            <Box display={"flex"} justifyContent={"center"}>
              <Button variant={"contained"} color={"primary"}>
                Search
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default index;
