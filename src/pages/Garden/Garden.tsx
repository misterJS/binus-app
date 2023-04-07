import SearchIcon from '@mui/icons-material/Search';
import {
    Box,
    Button,
    Checkbox, FormControl,
    Grid,
    IconButton,
    InputBase,
    InputLabel,
    MenuItem,
    Paper,
    Select, Typography
} from '@mui/material';
import { memo } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { Content } from '../../components/content';
import TextFieldWithController from '../../components/form/Form-textfield';
import { useGardenSetup } from './Garden.utils';
import ProjectInfo from './_partials/ProjectInfo';
import RewardAndStatus from './_partials/RewardStatus';

const GardenMemo = () => {
    const { getProjectsList, set, garden } = useGardenSetup()
    const navigate = useNavigate()

    const handleChange = (data: any) => {
        console.log(data);
    }

    const { handleSubmit, control, formState: { errors } } = useForm()

    return (
        <Content>
            <Box sx={{ mb: 3 }}>
                <Paper
                    component="form"
                    elevation={0}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid #E0E0E0',
                        borderRadius: 5
                    }}
                >
                    <IconButton type="submit" aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search..."
                        inputProps={{ 'aria-label': 'Search...' }}
                    />
                </Paper>
            </Box>
            <Grid container spacing={3}>
                <Grid item md={3}>
                    <Paper
                        sx={{
                            p: '24px 16px',
                            borderRadius: 1,
                        }}
                    >
                        <form onSubmit={handleSubmit(handleChange)}>
                            <Typography variant='body1' color={'#5E5873'} fontWeight={700}>
                                Job Category
                            </Typography>
                            <Box marginLeft={'-10px'} marginBottom={2}>
                                {['Questionnare', 'Paraphrasing', 'Translation', 'Proofread/Editing'].map((item) =>
                                    <Box key={item} display={'flex'} gap={0.1} alignItems={'center'}>
                                        <Checkbox onClick={() => set("category", item)} />
                                        <Typography variant='body2'>
                                            {item}
                                        </Typography>
                                    </Box>
                                )}
                            </Box>
                            <Typography variant='body1' color={'#5E5873'} fontWeight={700}>
                                Point:
                            </Typography>
                            <Box sx={{ mt: 2, mb: 2 }}>
                                <TextFieldWithController
                                    name='minPoint'
                                    control={control}
                                    label='Min. Point'
                                    placeholder='Min. Point'
                                />
                                <TextFieldWithController
                                    name='maxPoint'
                                    control={control}
                                    label='Max. Point'
                                    placeholder='Max. Point'
                                />
                            </Box>
                            <Typography variant='body1' color={'#5E5873'} fontWeight={700}>
                                Sort By:
                            </Typography>
                            <FormControl sx={{ mt: 2, mb: 10 }} size="small" fullWidth>
                                <InputLabel id="relevance-label">Relevance</InputLabel>
                                <Select
                                    labelId="relevance-label"
                                    placeholder='Relevance'
                                    fullWidth
                                    onChange={(e) => set("sortBy", String(e.target.value))}
                                    label="Relevance"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={'Latest'}>Relevance</MenuItem>
                                </Select>
                            </FormControl>
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={getProjectsList}
                                fullWidth
                            >
                                <Typography fontWeight={600} sx={{ textTransform: 'capitalize' }} variant='body1' color={'#fff'}>
                                    Filter
                                </Typography>
                            </Button>
                            <div style={{ marginBottom: 10 }}></div>
                            <Button
                                color="primary"
                                variant="outlined"
                                fullWidth
                            >
                                <Typography fontWeight={600} sx={{ textTransform: 'none' }} variant='body1'>
                                    Post a Job
                                </Typography>
                            </Button>
                        </form>
                    </Paper>
                </Grid>
                <Grid item md={8}>
                    <Grid container spacing={2}>
                        {garden.projectList?.returnValue?.map((project: any) =>
                            <Grid item md={6}>
                                <Paper
                                    sx={{
                                        p: '24px 16px',
                                        borderRadius: 1,
                                    }}
                                >
                                    <RewardAndStatus reward={project.pointReward} status={project.status} />
                                    <Typography
                                        variant='body2'
                                        color="#497FB8"
                                    >
                                        3 day left
                                    </Typography>
                                    <Typography variant='body1' color={'#5E5873'} fontWeight={700}>
                                        {project.title}
                                    </Typography>
                                    <Typography variant='subtitle2' color={'#5E5873'}>
                                        {project.description}
                                    </Typography>
                                    <ProjectInfo project={project} />
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        fullWidth
                                        onClick={() => navigate("job-detail")}
                                    >
                                        <Typography fontWeight={600} sx={{ textTransform: 'capitalize' }} variant='body1' color={'#fff'}>
                                            Open Project
                                        </Typography>
                                    </Button>
                                </Paper>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Content>
    );
}

export const Garden = memo(GardenMemo)
