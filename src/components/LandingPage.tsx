import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router";

const LandingPage: FC<unknown> = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: { md: 40 },
      }}
    >
      <Grid justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Typography
            component="h1"
            variant="h4"
          >
              Design Patterns
          </Typography>
        </Grid>

        {/* button/link to the sign-in page */}
        {/* pass in some data here to tell me that the user logged in as a authenticated user */}
        <Grid item xs={12} sx={{ mt: 10 }}>
          <Button
            fullWidth
            variant="outlined" 
            onClick={() => navigate("/sign-in")}
          >
            Sign in
          </Button>
        </Grid>

        <Grid item xs={12} sx={{ mt: 5 }}>
          <Divider>
            <Typography component="p" variant="caption">
              OR
            </Typography>
          </Divider>
        </Grid>
        
        {/* button/link to the home page as guest */}
        {/* pass in some data here to tell me that the user logged in as a guest */}
        <Grid item xs={12} sx={{ mt: 5 }}>
          <Button
            fullWidth
            variant="outlined" 
            onClick={() => navigate("/home")}
          >
            Sign in as guest
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingPage;
