import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, TextField, Typography } from "@mui/material";
import { FC, memo, ReactNode, useState } from "react"

interface DialogProps {
    children: ReactNode
}

const DialogMyProposalMemo: FC<DialogProps> = (props) => {
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
                maxWidth={"md"}
                fullWidth
            >
                <DialogTitle id="alert-dialog-title" sx={{ textAlign: 'center', fontSize: '12px', fontWeight: 700 }}>
                    {"My Proposal"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <FormControl sx={{ mb: 2 }} size="small" fullWidth>
                            <TextField
                                type="text"
                                multiline
                                rows={8}
                                value="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur"
                                size="small"
                                fullWidth
                            />
                        </FormControl>
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ justifyContent: "center" }}>
                    <Button onClick={handleClose} variant="contained" color="inherit">back</Button>
                    <Button onClick={handleClose} variant="contained" color="primary" autoFocus>
                        Edit
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export const DialogMyProposal = memo(DialogMyProposalMemo)