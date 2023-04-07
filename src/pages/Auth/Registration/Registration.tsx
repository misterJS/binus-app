import React, { memo } from "react"
import {
    Container,
    Paper,
    Typography,
    FormControl,
    Box,
    TextField,
    Button
} from "@mui/material";
import * as yup from 'yup'
import { useRegistrationSetup } from "./Registration.utils";
import { Controller, useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { RECAPTCHA_SITEKEY } from "../../../utils";

const RegistrationMemo = () => {
    const { handleRegister } = useRegistrationSetup();
    const navigate = useNavigate()
    const registrationSchema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required(),
        confirmPassword: yup.string().required(),
    })

    const { handleSubmit, getValues, trigger, setValue, control, formState: { errors } } = useForm({ resolver: yupResolver(registrationSchema) })


    const onChange = (value: any) => {
        trigger('captcha')
        setValue('captcha', value);
    }

    return (
        <Container maxWidth="xs" sx={{ py: 20 }}>
            <Paper sx={{
                p: '24px 16px',
                backgroundColor: '#F2F2F2',
                boxShadow: 'none',
                border: '1px solid #E0E0E0',
            }}>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <Box sx={{ display: "flex", justifyContent: "center", gap: 1, my: 2 }}>
                        <Typography variant="h5" sx={{ textAlign: "center", my: 2, fontWeight: 700, color: "#028ED5" }}>
                            Registration
                        </Typography>
                    </Box>

                    <Typography variant='body2' color={'#4F4F4F'} fontWeight={500}>
                        Email:
                    </Typography>
                    <FormControl sx={{ mt: 1, mb: 2 }} size="small" fullWidth>
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

                    <Typography variant='body2' color={'#4F4F4F'} fontWeight={500}>
                        Username:
                    </Typography>
                    <FormControl sx={{ mt: 1, mb: 2 }} size="small" fullWidth>
                        <Controller
                            name='username'
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    placeholder='Username'
                                    size="small"
                                    fullWidth
                                />
                            )}
                        />
                    </FormControl>

                    <Typography variant='body2' color={'#4F4F4F'} fontWeight={500}>
                        Phone No:
                    </Typography>
                    <FormControl sx={{ mt: 1, mb: 2 }} size="small" fullWidth>
                        <Controller
                            name='phoneNumber'
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    placeholder='Phone Number'
                                    size="small"
                                    fullWidth
                                />
                            )}
                        />
                    </FormControl>

                    <Typography variant='body2' color={'#4F4F4F'} fontWeight={500}>
                        Full Name:
                    </Typography>
                    <FormControl sx={{ mt: 1, mb: 2 }} size="small" fullWidth>
                        <Controller
                            name='fullName'
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    placeholder='Full Name'
                                    size="small"
                                    fullWidth
                                />
                            )}
                        />
                    </FormControl>


                    <Typography variant='body2' color={'#4F4F4F'} fontWeight={500}>
                        Company or University Name:
                    </Typography>
                    <FormControl sx={{ mt: 1, mb: 2 }} size="small" fullWidth>
                        <Controller
                            name='companyName'
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    placeholder='Company Name'
                                    size="small"
                                    fullWidth
                                />
                            )}
                        />
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

                    <Typography variant='body2' color={'#4F4F4F'} fontWeight={500}>
                        Password:
                    </Typography>
                    <FormControl sx={{ mt: 1, mb: 3 }} size="small" fullWidth>
                        <Controller
                            name='password'
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    placeholder='Password'
                                    type="password"
                                    size="small"
                                    fullWidth
                                />
                            )}
                        />
                        {errors.password && <span style={{ fontSize: '14px', color: "red" }}>{String(errors?.password?.message)}</span>}
                    </FormControl>

                    <Typography variant='body2' color={'#4F4F4F'} fontWeight={500}>
                        Confirm Password:
                    </Typography>
                    <FormControl sx={{ mt: 1, mb: 3 }} size="small" fullWidth>
                        <Controller
                            name='confirmPassword'
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    placeholder='Confirm Password'
                                    type="password"
                                    size="small"
                                    fullWidth
                                />
                            )}
                        />
                        {errors.confirmPassword && <span style={{ fontSize: '14px', color: "red" }}>{String(errors?.confirmPassword?.message)}</span>}
                    </FormControl>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <Button disabled={getValues('captcha') === undefined} type="submit" color="primary" variant="contained">
                            <Typography
                                sx={{ textTransform: 'none', fontWeight: 700 }}
                                variant='body2'
                            >
                                Submit
                            </Typography>
                        </Button>
                        <Button onClick={() => navigate("/login")} color="primary" variant="contained">
                            <Typography
                                sx={{ textTransform: 'none', fontWeight: 700 }}
                                variant='body2'
                            >
                                Back to Login
                            </Typography>
                        </Button>
                    </Box>
                </form>
            </Paper>
        </Container>
    )
}

export const Registration = memo(RegistrationMemo);