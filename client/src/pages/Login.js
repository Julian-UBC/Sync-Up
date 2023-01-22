import {
  signInWithGooglePopUp,
  signInWithFirebase,
} from "../utils/firebase";
import {
  Box,
  Container,
  Avatar,
  Typography,
  FormControlLabel,
  Checkbox,
  TextField,
  Button,
  CssBaseline,
  Grid,
  Link,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LockOutlined } from "@mui/icons-material";
import GoogleButton from "react-google-button";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const theme = createTheme();

const Login = ({ setIsLogin }) => {
  const location = useLocation();
  // get userId
  let isSignUp = location.state.isSignUp;

  const [signUp, setSignUp] = useState(isSignUp);
  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    signInWithFirebase(email, password, setIsLogin, navigate);
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    signUpWithFirebase(email, password, setIsLogin, navigate);
  };

  const loginWithGoogle = () => {
    signInWithGooglePopUp(setIsLogin, navigate);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "black" }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            {signUp ? "Sign Up" : "Sign In"}
          </Typography>
          <Box
            component="form"
            onSubmit={signUp ? handleSignUp : handleSignIn}
            noValidate
            sx={{ mt: 1 }}
          >
            {signUp ? (
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Full Name"
                name="name"
                autoComplete="full-name"
                autoFocus
              />
            ) : null}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {signUp ? null : (
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1.5, height: "50px" }}
            >
              {signUp ? "Sign Up" : "Sign In"}
            </Button>
            {signUp ? null : (
              <>
                <Box className="flex justify-center my-1">OR</Box>
                <GoogleButton
                  onClick={loginWithGoogle}
                  style={{ width: "100%" }}
                />
              </>
            )}
            <Grid container className="mt-3">
              <Grid item xs>
                {signUp ? null : (
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                )}
              </Grid>
              <Grid item>
                <Link
                  href="#"
                  onClick={() => setSignUp(signUp ? false : true)}
                  variant="body2"
                >
                  {signUp
                    ? "Already have an account? Sign In"
                    : "Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export { Login };
