import React, { memo } from "react"
import {
    Container,
    Paper,
    Typography
} from "@mui/material";

const ConfirmationMemo = () => {
    return (
        <Container maxWidth="md" sx={{ py: 50 }}>
            <Paper sx={{
                display: "flex",
                gap: 3,
                width: '834px',
                p: '33px 26px',
                backgroundColor: '#F2F2F2',
                boxShadow: 'none',
                border: '1px solid #E0E0E0',
            }}>
                <img src="/photos/bee.png" width="70px" />
                <Typography>
                    Thanks for verifying your account, we need to internal check before you can access the system. If you haven’t get an access in 3 days. You can email to us at helpdesk@binus.ac.id
                </Typography>
            </Paper>
        </Container>
    )
}

export const Confirmation = memo(ConfirmationMemo);