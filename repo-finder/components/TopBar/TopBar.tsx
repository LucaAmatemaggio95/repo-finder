import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import React from "react";

const TopBar = () => {
  const { data: session } = useSession();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Repo-Finder
            </Typography>
            {session && (
              <Box>
                <Typography variant="body2">
                  Logged is as {session?.user?.name}
                </Typography>
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default TopBar;
