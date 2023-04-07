import { Box, Paper, Typography, Button } from "@mui/material"
import { memo } from "react"
import { Content } from "../../../components"
import { ListRanking } from "./_partials";
import { ActivityBold } from "../../../assets/icon-apps";

const RankingManagementMemo = () => {
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
                            Ranking Management
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'right', marginBottom: 2 }}>
                        <Button
                        variant="contained"
                        size="small"
                        >Credit Rank</Button>
                    </Box>
                    <ListRanking />
                </Paper>
            </Content>
        </>
    )
}

export const RankingManagement = memo(RankingManagementMemo)