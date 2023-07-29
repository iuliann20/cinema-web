import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import routes from '../../utils/routes';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setLoginUserDetails, loginByUsername } from "../../actions/user";
export default function Login() {
    const dispatch = useDispatch();
    const loginDetailsState = useSelector((state) => state.user.loginUserDetails);

    const changeHandler = (e) => {
        let fieldName = e.target.name;
        let value = e.target.value;
        if (fieldName === "rememberMe") {
            value = e.target.checked;
        }
        dispatch(setLoginUserDetails({
            ...loginDetailsState,
            [fieldName]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(loginByUsername(loginDetailsState));
      };
      
    return (
        <>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="text"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            onChange={changeHandler}
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
                            onChange={changeHandler}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" name="rememberMe" color="primary" onChange = {changeHandler} />}
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
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link data-testid='register-button' component={RouterLink} to={routes.register} variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>);
}