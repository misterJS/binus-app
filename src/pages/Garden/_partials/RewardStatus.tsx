import { Grid, Box, Typography, Chip } from "@mui/material";

interface RewardAndStatusProps {
    reward: number;
    status: string;
}

const RewardAndStatus = ({ reward, status }: RewardAndStatusProps) => (
    <Grid container justifyContent="space-between" alignItems="center" sx={{ marginBottom: 2 }}>
        <Grid item>
            <Box display="flex" gap={1}>
                <img src="/icons/star.svg" alt="star" />
                <Typography fontWeight={600} sx={{ textTransform: 'none' }} variant="body2">
                    {reward}
                </Typography>
            </Box>
        </Grid>
        <Grid item>
            <Chip sx={{ backgroundColor: '#F9CE30', color: '#fff' }} label={status} />
        </Grid>
    </Grid>
);

export default RewardAndStatus