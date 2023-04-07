import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, TextField, Typography } from "@mui/material";
import { FC, memo, ReactNode, useState } from "react"

interface DialogProps {
    setIsOpen: (val: boolean) => void;
    isOpen: boolean;
}

const DialogBalancesMemo: FC<DialogProps> = (props) => {
    return (
        <>
            <Dialog
                open={props.isOpen}
                onClose={() => props.setIsOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Alert"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Typography variant='body2' color={'#4F4F4F'} fontWeight={500}>
                            insufficient budget
                        </Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => props.setIsOpen(false)} autoFocus>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export const DialogBalances = memo(DialogBalancesMemo)