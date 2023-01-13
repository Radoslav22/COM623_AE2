import * as React from 'react';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "./Button";
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Google from '../assets/google.png'




function Copyright(props) {

    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function SignIn(props) {
    const { buttonText, onEmailSubmit, onSocialSubmit } = props;



    const loginFormSchema = yup
        .object({
            email: yup
                .string()
                .email("please enter a valid email")
                .required("please enter a email"),
            password: yup
                .string()
                .required("please enter a password")
                .min(5, "password must be 5 characters long"),
        })
        .required();
    const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(loginFormSchema), });



    const errorBorder = (error) => error && { borderColor: "red" };
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography><br />
                    <img src={Google} alt="#" onClick={() => onSocialSubmit("google")} style={{ height: "50px" }} /><br />
                    <Typography component="h2" variant="h6">
                        OR
                    </Typography>
                    <form onSubmit={handleSubmit(onEmailSubmit)}>

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            type='text'
                            autoFocus

                            {...register("email")}
                        />
                        <p>{errors?.email?.message}</p>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"

                            {...register("password")}
                        />
                        <p>{errors?.password?.message}</p>

                        <Button
                            text={buttonText}
                            type="submit"

                        />
                    </form>

                    <Grid container sx={{ textAlign: "center" }}>

                        <Grid item xs>
                            <Link href="/join" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>





                </Box>

                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider >
    );
}