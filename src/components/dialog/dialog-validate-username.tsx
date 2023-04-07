import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormHelperText, TextField, Typography } from "@mui/material";
import { FC, memo, ReactNode, useState } from "react"

interface DialogProps {
    setIsOpen: (val: boolean) => void;
    isOpen: boolean;
}

const DialogValidateUsername: FC<DialogProps> = (props) => {
    return (
        <>
            <Dialog
                open={props.isOpen}
                onClose={() => props.setIsOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth={"md"}
                fullWidth
            >
                <DialogTitle id="alert-dialog-title" sx={{ textAlign: 'center', fontSize: '12px', fontWeight: 700 }}>
                    {"Warning"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <FormControl sx={{ mb: 2 }} size="small" fullWidth>
                            <TextField
                                type="text"
                                size="small"
                                placeholder="Username"
                                fullWidth
                            />
                        </FormControl>
                        <FormHelperText>
                            (Only support alphanumeric character, doesn’t support any symbols. You can change username later for one attempt)
                        </FormHelperText>
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ justifyContent: "center" }}>
                    <Button onClick={() => props.setIsOpen(false)} variant="contained" color="inherit">back</Button>
                    <Button onClick={() => props.setIsOpen(false)} variant="contained" color="info" autoFocus>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export const DialogUsername = memo(DialogValidateUsername)