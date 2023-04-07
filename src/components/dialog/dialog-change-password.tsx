import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormHelperText, TextField, Typography } from "@mui/material";
import { FC, memo, ReactNode, useEffect } from "react"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleChangePassword } from "../../store/client";

interface DialogProps {
    setIsOpen: (val: boolean) => void;
    isOpen: boolean;
}

const DialogChangePasswordMemo: FC<DialogProps> = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth = useSelector((state: any) => state.client.auth)

    useEffect(() => {
        if (auth.loading === false) {
            // if (auth?.loginState.resultCode === 200) {
            //     props.setIsOpen(false)
            //     navigate('/login')
            // }
        }

    }, [auth?.loading])


    const handleChange = (data: any) => {
        dispatch(handleChangePassword(data))
    }

    const changePasswordSchema = yup.object().shape({
        oldPassword: yup.string().required(),
        password: yup.string().required(),
        confirmPassword: yup.string().required(),
    })

    const { handleSubmit, getValues, trigger, setValue, control, formState: { errors } } = useForm({ resolver: yupResolver(changePasswordSchema) })

    return (
        <>
            <Dialog
                open={props.isOpen}
                onClose={() => props.setIsOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth={"sm"}
                fullWidth
            >
                <form onSubmit={handleSubmit(handleChange)}>
                    <DialogTitle id="alert-dialog-title" sx={{ textAlign: 'center', fontSize: '12px', fontWeight: 700 }}>
                        {"Change Password"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <FormControl sx={{ mb: 2 }} size="small" fullWidth>
                                <Controller
                                    name='oldPassword'
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            type="password"
                                            size="small"
                                            placeholder="Old Password"
                                            fullWidth
                                        />
                                    )}
                                />
                                {errors.oldPassword && <span style={{ fontSize: '14px', color: "red" }}>{String(errors?.oldPassword?.message)}</span>}
                            </FormControl>
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
                            <FormHelperText>
                                (Only support alphanumeric character, doesn’t support any symbols. You can change username later for one attempt)
                            </FormHelperText>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions sx={{ justifyContent: "center" }}>
                        <Button onClick={() => props.setIsOpen(false)} variant="contained" color="inherit">Cancel</Button>
                        <Button type="submit" variant="contained" color="info" autoFocus>
                            Submit
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    )
}

export const DialogChangePassword = memo(DialogChangePasswordMemo)