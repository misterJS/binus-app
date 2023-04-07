import { Box, Chip, Grid, Paper, Typography } from '@mui/material';
import { Transgender as TransgenderIcon } from '@mui/icons-material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

interface ProjectInfoProps {
    project: {
        gender: string;
        projectAgesName: string;
        locationName: string;
        educationLevel: string;
        projectCategoryName: string;
    };
}

const ProjectInfo = ({ project }: ProjectInfoProps) => {
    const { gender, projectAgesName, locationName, educationLevel, projectCategoryName } = project;
    return (
        <Grid container justifyContent="space-between" sx={{ marginBottom: 3, marginTop: 2 }}>
            <Grid item>
                <Box display="flex" sx={{ mb: 0.5 }} gap={1}>
                    <TransgenderIcon />
                    <Typography sx={{ textTransform: 'none' }} variant="body2">
                        {gender}
                    </Typography>
                </Box>
                <Box display="flex" sx={{ mb: 0.5 }} gap={1}>
                    <PersonOutlineOutlinedIcon />
                    <Typography sx={{ textTransform: 'none' }} variant="body2">
                        {projectAgesName}
                    </Typography>
                </Box>
                <Box display="flex" sx={{ mb: 0.5 }} gap={1}>
                    <PlaceOutlinedIcon />
                    <Typography sx={{ textTransform: 'none' }} variant="body2">
                        {locationName}
                    </Typography>
                </Box>
            </Grid>
            <Grid item>
                <Box display="flex" sx={{ mb: 0.5 }} gap={1}>
                    <ArticleOutlinedIcon />
                    <Typography sx={{ textTransform: 'none' }} variant="body2">
                        {educationLevel}
                    </Typography>
                </Box>
                <Box display="flex" sx={{ mb: 0.5 }} gap={1}>
                    <WorkOutlineOutlinedIcon />
                    <Typography sx={{ textTransform: 'none' }} variant="body2">
                        {projectCategoryName}
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
};

export default ProjectInfo