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
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { useForgotPasswordSetup } from "./ForgotPassword.utils";
import { RECAPTCHA_SITEKEY } from "../../../utils";

const ForgotPasswordMemo = () => {
    const { handleForgot } = useForgotPasswordSetup();
    const onChange = (value: any) => {
        console.log(value)
    }
    const forgotSchema = yup.object().shape({
        email: yup.string().email().required()
    })

    const { handleSubmit, getValues, trigger, setValue, control, formState: { errors } } = useForm({ resolver: yupResolver(forgotSchema) })

    return (
        <Container maxWidth="xs" sx={{ py: 20 }}>
            <Paper sx={{
                p: '24px 16px',
                backgroundColor: '#F2F2F2',
                boxShadow: 'none',
                border: '1px solid #E0E0E0',
            }}>
                <form onSubmit={handleSubmit(handleForgot)}>
                    <Box sx={{ display: "flex", justifyContent: "center", gap: 1, my: 2 }}>
                        <Typography variant="h5" sx={{ textAlign: "center", my: 2, fontWeight: 700, color: "#028ED5" }}>
                            Forgot Password
                        </Typography>
                    </Box>

                    <Typography sx={{ textAlign: "center", my: 2 }}>
                        Input your registered email and check your email for resetting account
                    </Typography>

                    <Typography variant='body2' color={'#4F4F4F'} fontWeight={500}>
                        Email
                    </Typography>
                    <FormControl sx={{ mt: 1, mb: 2 }} size="small" fullWidth>
                        <Controller
                            name='email'
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    id="email"
                                    placeholder='Email'
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

                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
                        <Button type="submit" color="primary" variant="contained">
                            <Typography
                                sx={{ textTransform: 'none', fontWeight: 700 }}
                                variant='body2'
                            >
                                Submit
                            </Typography>
                        </Button>
                    </Box>
                </form>
            </Paper>
        </Container>
    )
}

export const ForgotPassword = memo(ForgotPasswordMemo);