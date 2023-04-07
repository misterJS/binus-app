import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { memo } from "react"
import { DeleteBold, PlusOutline } from "../../assets/icon-apps";
import styles from './imageUploader.module.css';

const ImageUploaderMemo = () => {
    return (
        <Grid container gap={2}>
            <Grid item>
                <Paper
                    variant="outlined"
                    sx={{
                        height: '153px',
                        p: '4px',
                        textAlign: 'center',
                        maxWidth: '162px'
                    }}
                >
                    <Box sx={{ py: '22px', color: '#200E32' }}>
                        <PlusOutline />
                    </Box>
                    <Typography
                        sx={{ fontSize: '14px', color: '#4F4F4F' }}
                    >Upload Evidence</Typography>
                    <Typography
                        sx={{ fontSize: '10px', color: '#9A9A9A' }}
                    >(Support only png, jpg & pdf Max. 2 Mb file size)</Typography>
                </Paper>
            </Grid>
            <Grid item>
                <Paper
                    variant="outlined"
                    sx={{
                        height: '153px',
                        textAlign: 'center',
                        maxWidth: '162px'
                    }}
                    className={styles["container"]}
                >
                    <img style={{ borderRadius: 2 }} width="160px" height="151px" src='/photos/default.png' />
                    <div className={styles["overlay"]}>
                        <Button variant="contained" color="error">
                            <DeleteBold color='inherit' />
                            <Typography sx={{fontSize: '14px', ml: '3px', textTransform: "capitalize" }}>Delete</Typography>
                        </Button>
                    </div>
                </Paper>
            </Grid>
        </Grid >
    )
}

export const ImageUploader = memo(ImageUploaderMemo);