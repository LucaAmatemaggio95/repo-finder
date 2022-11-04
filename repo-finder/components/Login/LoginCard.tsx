import { signIn } from "next-auth/react";
import { GitHub } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  styled,
  Toolbar,
  Typography
} from "@mui/material";

const MainCard = styled(Card)`
  width: 25%;
`;

const LoginCard = () => {
  return (
    <>
      <Toolbar />
      <Box display={"flex"} justifyContent={"center"}>
        <MainCard>
          <CardContent>
            <Typography variant="body1" gutterBottom fontWeight={500}>
              You have to log-in with GitHub to use this tool
            </Typography>
            <Typography variant="subtitle2">
              We will use the GitHub OAuth login method
            </Typography>
            <Box display={"flex"} justifyContent={"center"} mt={5}>
              <Button
                variant={"contained"}
                color="primary"
                size="large"
                startIcon={<GitHub />}
                onClick={() => signIn()}
              >
                Login
              </Button>
            </Box>
          </CardContent>
        </MainCard>
      </Box>
    </>
  );
};

export default LoginCard;
