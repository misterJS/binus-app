import { useMsal } from "@azure/msal-react";
import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, Container, FormControl, IconButton, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import { memo, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { loginRequest } from "../../../authConfig";
import { RECAPTCHA_SITEKEY } from "../../../utils";
import { useLoginSetup } from "./Login.utils";

const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
});

const LoginMemo = memo(() => {
    const [showPassword, setShowPassword] = useState(false);
    const { instance, accounts } = useMsal();
    const navigate = useNavigate();
    const { handleLogin, handleLoginSso: handleLoginSsoThunk } = useLoginSetup();

    const { handleSubmit, getValues, trigger, setValue, control, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });

    const handleLoginSso = (loginType: any) => {
        if (loginType === "popup") {
            instance.loginPopup(loginRequest);
            handleLoginSsoThunk(accounts);
        }
    };

    const onChange = (value: any) => {
        trigger('captcha');
        setValue('captcha', value);
    };

    return (
        <Container maxWidth="xs" sx={{ py: 20 }}>
            <Paper sx={{
                p: '24px 16px',
                backgroundColor: '#F2F2F2',
                boxShadow: 'none',
                border: '1px solid #E0E0E0',
            }}>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <img src='/photos/logo.png' alt="logo" />
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", gap: 1, my: 2 }}>
                        <img src='/photos/appslogo.png' alt="logo" />
                        <Typography variant="h5" sx={{ textAlign: "center", my: 2, fontWeight: 700, color: "#028ED5" }}>
                            Beesearch Application
                        </Typography>
                    </Box>
                    <FormControl sx={{ mt: 1, mb: 2 }} size="small" fullWidth>
                        <Typography variant='body2' color={'#4F4F4F'} fontWeight={500}>
                            Email
                        </Typography>
                        <Controller
                            name='email'
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    placeholder='Email'
                                    size="small"
                                    fullWidth
                                />
                            )}
                        />
                        {errors.email && <span style={{ fontSize: '14px', color: "red" }}>{String(errors?.email?.message)}</span>}
                    </FormControl>
                    <FormControl sx={{ mt: 1, mb: 3 }} size="small" fullWidth>
                        <Typography variant='body2' color={'#4F4F4F'} fontWeight={500}>
                            Password
                        </Typography>
                        <Controller
                            name='password'
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    placeholder='Password'
                                    type={showPassword ? 'text' : 'password'}
                                    size="small"
                                    fullWidth
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            )}
                        />
                        {errors.password && <span style={{ fontSize: '14px', color: "red" }}>{String(errors?.password?.message)}</span>}
                    </FormControl>
                    <ReCAPTCHA
                        sitekey={RECAPTCHA_SITEKEY}
                        onChange={onChange}
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    />
                    <Typography sx={{ textAlign: "center", my: 2 }}>
                        (Please use Mozila Firefox (version 65.0 at least) browser for the best capability experience,
                        thank you)
                    </Typography>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <Button color="primary" disabled={getValues('captcha') === undefined} variant="contained" type="submit">
                            <Typography
                                sx={{ textTransform: 'none', fontWeight: 700 }}
                                variant='body2'
                            >
                                Login
                            </Typography>
                        </Button>
                        <Button color="primary" variant="contained" onClick={() => handleLoginSso("popup")}>
                            <Typography
                                sx={{ textTransform: 'none', fontWeight: 700 }}
                                variant='body2'
                            >
                                Login by Binus ID
                            </Typography>
                        </Button>
                    </Box>

                    <Typography sx={{ textAlign: "center", my: 2 }}>
                        Having problem with login? Try to <span style={{ color: "blue", cursor: "pointer" }} onClick={() => navigate('/forgot-password')}>Forgot Password </span>
                        or <span style={{ color: "blue", cursor: "pointer" }} onClick={() => navigate('/register')}>Register </span>
                    </Typography>
                </form>
            </Paper>
        </Container>
    )
})

export const Login = memo(LoginMemo);