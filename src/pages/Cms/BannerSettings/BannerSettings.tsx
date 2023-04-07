import { Box, Paper, Typography, Button } from "@mui/material"
import { memo } from "react"
import { Content } from "../../../components"
import { ListBanner } from "./_partials";
import { ActivityBold } from "../../../assets/icon-apps";

const BannerSettingsMemo = () => {
    return (
        <>
            <Content>
                <Paper
                    sx={{
                        p: '24px 16px',
                        borderRadius: 1,
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1 }}  >
                        <ActivityBold />
                        <Typography variant='h5' color={'#5E5873'} fontWeight={700}>
                            Banner Settings
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'right', marginBottom: 2 }}>
                        <Button
                        variant="contained"
                        size="small"
                        >Add Banner</Button>
                    </Box>
                    <ListBanner />
                </Paper>
            </Content>
        </>
    )
}

export const BannerSettings = memo(BannerSettingsMemo)