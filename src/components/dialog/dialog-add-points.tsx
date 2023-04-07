import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, TextField, Typography } from "@mui/material";
import { FC, memo, ReactNode, useState } from "react"

interface DialogProps {
    children: ReactNode
}

const DialogPointsMemo: FC<DialogProps> = (props) => {
    const { children } = props
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <span onClick={handleClickOpen}>
                {children}
            </span>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Update Point"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Typography variant='body2' color={'#4F4F4F'} fontWeight={500}>
                        @bayukusmo Point:
                        </Typography>
                        <FormControl sx={{ mt: 1, mb: 2 }} size="small" fullWidth>
                            <TextField
                                type="number"
                                placeholder='1000'
                                size="small"
                                fullWidth
                            />
                        </FormControl>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose} autoFocus>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export const DialogPoints = memo(DialogPointsMemo)