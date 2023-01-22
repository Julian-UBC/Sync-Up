import {
    signInWithGooglePopUp,
    createUserDocumentFromAuth,
    signInWithFirebase
} from "../../utils/firebase";
import { Box, Container, Avatar, Typography, FormControlLabel, Checkbox, TextField, Button, CssBaseline, Grid, Link } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LockOutlined } from "@mui/icons-material"
import GoogleButton from "react-google-button";
import { useState } from "react";

const theme = createTheme();

const SignIn = () => {
    // const [user, setUser] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [hasAccount, setHasAccount] = useState(false)
    const [forgotpassword, setForgotpassword] = useState(false)

    const clearInputs = () => {
        setEmail('')
        setPassword('')
    }
    const clearErrors = () => {
        setEmailError('')
        setPasswordError('')
    }

    const handleSignIn = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get("email")
        const password = data.get("password")
        clearErrors()
        signInWithFirebase(email, password)
            .then(() => { setLoading(true) })
            .catch(err => {
                switch (err.code) {
                    case "auth/invalid-email":
                        setEmailError(err.message)
                        break
                    case "auth/user/disabled":
                    case "auth/user-not-found":
                        setEmailError('Email does not exist')
                        break
                    case "auth/wrong-password":
                        setPasswordError('Incorrect Password')
                        break
                    default:
                }
            })
    }

    const loginWithGoogle = async () => {
        console.log("Sign in with google popup")
        const {user} = await signInWithGooglePopUp()
        
        try {
            await createUserDocumentFromAuth(user);
        } catch (err) {
            console.log("loginWithGoogle err: ", err)
        }

    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "black" }}>
                        <LockOutlined />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSignIn}
                        noValidate
                        sx={{ mt: 1 }}
                    >
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
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <GoogleButton onClick={loginWithGoogle} className="w-full" />
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default SignIn;

