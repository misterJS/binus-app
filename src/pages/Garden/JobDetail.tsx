import { Avatar, Box, Chip, Divider, Grid, Link, Paper, Typography } from "@mui/material";
import { memo } from "react"
import TransgenderIcon from '@mui/icons-material/Transgender';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useDropzone } from 'react-dropzone'
import { Content, ImageUploader } from "../../components";
import { Button } from "../../components/button";

const JobDetailMemo = () => {
    return (
        <Content>
            <Box display="flex" gap={1}>
                Garden
                <span> {'>'} </span>
                <Typography sx={{ color: '#028ED5' }}>Job Detail</Typography>
            </Box>

            <Paper
                sx={{
                    p: '24px 16px',
                    mt: 3,
                    boxShadow: 'none',
                    border: '1px solid #E0E0E0',
                    borderRadius: 1,
                }}
            >
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ marginBottom: 2 }}
                >
                    <Grid item>
                        <Grid container sx={{ alignItems: 'center' }} spacing={1}>
                            <Grid item>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70435 1.51898C8.03402 1.51898 7.46373 1.9848 7.30365 2.61265H12.6863C12.5263 1.9848 11.956 1.51898 11.2856 1.51898H8.70435ZM14.2071 2.61264H16.1881C18.2891 2.61264 20 4.34428 20 6.47085C20 6.47085 19.94 7.3711 19.92 8.62477C19.918 8.72401 19.8699 8.82122 19.7909 8.87996C19.3097 9.2354 18.8694 9.52907 18.8294 9.54932C17.1686 10.6632 15.2386 11.447 13.1826 11.8369C13.0485 11.8632 12.9165 11.7934 12.8484 11.6739C12.2721 10.6754 11.1956 10.0253 9.995 10.0253C8.8024 10.0253 7.71586 10.6683 7.12256 11.6678C7.05353 11.7853 6.92346 11.8531 6.7904 11.8278C4.75138 11.4369 2.82141 10.6541 1.17059 9.55945L0.210105 8.89109C0.130065 8.84046 0.08004 8.74932 0.08004 8.64806C0.050025 8.13161 0 6.47085 0 6.47085C0 4.34428 1.71086 2.61264 3.81191 2.61264H5.78289C5.97299 1.1443 7.2036 0 8.70435 0H11.2856C12.7864 0 14.017 1.1443 14.2071 2.61264ZM19.6598 10.8152L19.6198 10.8355C17.5988 12.1924 15.1676 13.0937 12.6163 13.4684C12.2561 13.519 11.8959 13.2861 11.7959 12.9216C11.5758 12.0912 10.8654 11.5443 10.015 11.5443H10.005H9.98499C9.13457 11.5443 8.42421 12.0912 8.2041 12.9216C8.10405 13.2861 7.74387 13.519 7.38369 13.4684C4.83242 13.0937 2.4012 12.1924 0.38019 10.8355C0.370185 10.8254 0.270135 10.7646 0.190095 10.8152C0.10005 10.8659 0.10005 10.9874 0.10005 10.9874L0.170085 16.1519C0.170085 18.2785 1.87094 20 3.97199 20H16.018C18.1191 20 19.8199 18.2785 19.8199 16.1519L19.9 10.9874C19.9 10.9874 19.9 10.8659 19.8099 10.8152C19.7599 10.7849 19.6999 10.795 19.6598 10.8152ZM10.7454 15.0583C10.7454 15.4836 10.4152 15.8177 9.995 15.8177C9.58479 15.8177 9.24462 15.4836 9.24462 15.0583V13.7519C9.24462 13.3367 9.58479 12.9924 9.995 12.9924C10.4152 12.9924 10.7454 13.3367 10.7454 13.7519V15.0583Z" fill="#5E5873" />
                                </svg>
                            </Grid>
                            <Grid item>
                                <Typography
                                    variant="h5"
                                    component="div"
                                    fontWeight={700}
                                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                                >
                                    Job Detail
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Chip sx={{ backgroundColor: '#0C54A0BF', color: '#fff' }} label="Promoted" />
                    </Grid>
                </Grid>

                <Typography variant='body1' color={'#5E5873'} fontWeight={700} sx={{ marginTop: 2 }}>
                    Job Title:
                </Typography>
                <Typography variant='body1' color={'#5E5873'} fontWeight={700} sx={{ marginTop: 1 }}>
                    Penelitian Psikologi Terhadap Masyarakat
                </Typography>
                <Box display="flex" gap={1} sx={{ marginTop: 2 }}>
                    <img src='/icons/star.svg' alt="star" />
                    <Typography
                        fontWeight={600}
                        sx={{ textTransform: 'none' }}
                        variant='body2'
                    >
                        10.000
                    </Typography>
                </Box>

                <Typography variant='body1' color={'#5E5873'} fontWeight={700} sx={{ marginTop: 2 }}>
                    Job Details:
                </Typography>
                <Typography variant='subtitle2' color={'#5E5873'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>

                <Grid
                    container
                    justifyContent="space-between"
                    sx={{ marginBottom: 3, marginTop: 2 }}
                >
                    <Grid item>
                        <Box>
                            <Typography variant='body1' color={'#5E5873'} fontWeight={700}>
                                Job Details:
                            </Typography>
                        </Box>
                        <Grid
                            columnSpacing={10}
                            container
                            sx={{ marginBottom: 3, marginTop: 1, color: '#5E5873' }}
                        >
                            <Grid item>
                                <Box display="flex" sx={{ mb: 0.5 }} gap={1}>
                                    <TransgenderIcon htmlColor="#5E5873" />
                                    <Typography
                                        sx={{ textTransform: 'none' }}
                                        variant='body2'
                                    >
                                        All Gender
                                    </Typography>
                                </Box>
                                <Box display="flex" sx={{ mb: 0.5 }} gap={1}>
                                    <PersonOutlineOutlinedIcon htmlColor="#5E5873" />
                                    <Typography
                                        sx={{ textTransform: 'none' }}
                                        variant='body2'
                                    >
                                        All Ages
                                    </Typography>
                                </Box>
                                <Box display="flex" sx={{ mb: 0.5 }} gap={1}>
                                    <PlaceOutlinedIcon htmlColor="#5E5873" />
                                    <Typography
                                        sx={{ textTransform: 'none' }}
                                        variant='body2'
                                    >
                                        Jakarta
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box display="flex" sx={{ mb: 0.5 }} gap={1}>
                                    <ArticleOutlinedIcon htmlColor="#5E5873" />
                                    <Typography
                                        sx={{ textTransform: 'none' }}
                                        variant='body2'
                                    >
                                        S1 Undergraduate
                                    </Typography>
                                </Box>
                                <Box display="flex" sx={{ mb: 0.5 }} gap={1}>
                                    <WorkOutlineOutlinedIcon htmlColor="#5E5873" />
                                    <Typography
                                        sx={{ textTransform: 'none' }}
                                        variant='body2'
                                    >
                                        Paraphrasing
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box display="flex" sx={{ mb: 0.5 }} gap={1}>
                                    <CalendarMonthOutlinedIcon htmlColor="#5E5873" />
                                    <Typography
                                        sx={{ textTransform: 'none' }}
                                        variant='body2'
                                    >
                                        Open
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant='body1' color={'#5E5873'} fontWeight={700}>
                            Client Info:
                        </Typography>
                        <Grid container columnSpacing={2}>
                            <Grid item>
                                <img src='/photos/user.png' alt="user" />
                            </Grid>
                            <Grid item>
                                <Box display="flex" gap={0.5}>
                                    <PersonOutlineOutlinedIcon htmlColor="#5E5873" />
                                    <Typography
                                        sx={{ textTransform: 'none' }}
                                        variant='body2'
                                    >
                                        Prastyo Riski
                                    </Typography>
                                </Box>
                                <Typography
                                    sx={{ textTransform: 'none', mb: 2, ml: 3.5 }}
                                    variant='body2'
                                >
                                    @prof_1
                                </Typography>
                                <Box display="flex" sx={{ mb: 0.5 }} gap={0.5}>
                                    <AccessTimeIcon htmlColor="#5E5873" />
                                    <Typography
                                        sx={{ textTransform: 'none' }}
                                        variant='body2'
                                    >
                                        Member since 20 January 2021
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    container
                    justifyContent="space-between"
                    sx={{ marginBottom: 3, marginTop: 2 }}
                >
                    <Grid item>
                        <Box>
                            <Typography variant='body1' color={'#5E5873'} fontWeight={700}>
                                Attachment:
                            </Typography>
                        </Box>
                        <Box display="flex" flexDirection="column" gap={2} sx={{ mt: 1 }}>
                            <Typography
                                sx={{ textTransform: 'none' }}
                                variant='body2'
                            >
                                <Link href="#">project.zip</Link>
                            </Typography>
                            <Typography
                                sx={{ textTransform: 'none' }}
                                variant='body2'
                            >
                                <Link href="#">task_quetionare.pdf</Link>
                            </Typography>
                            <Button color="primary" variant="outlined">
                                <Typography
                                    sx={{ textTransform: 'none', fontWeight: 700 }}
                                    variant='body2'
                                >
                                    Download All
                                </Typography>
                            </Button>
                            <Button color="secondary" variant="contained">
                                <Typography
                                    sx={{ textTransform: 'none', fontWeight: 500 }}
                                    variant='body2'
                                >
                                    Report
                                </Typography>
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item sx={{ alignSelf: 'end' }}>
                        <Button color="primary" variant="contained">
                            <Typography
                                sx={{
                                    marginX: 5,
                                    textTransform: 'none',
                                    fontWeight: 500,
                                }}
                                variant='body2'
                            >
                                Apply Project
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>

                <Divider></Divider>
                <Typography
                    fontSize="16px"
                    component="div"
                    fontWeight={500}
                    sx={{ flexGrow: 1, my: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    Submit Evidence
                </Typography>
                <ImageUploader />
            </Paper>

            <Paper
                sx={{
                    p: '24px 16px',
                    mt: 3,
                    boxShadow: 'none',
                    border: '1px solid #E0E0E0',
                    borderRadius: 1,
                }}
            >
                <Grid container sx={{ alignItems: 'center' }} spacing={1}>
                    <Grid item>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70435 1.51898C8.03402 1.51898 7.46373 1.9848 7.30365 2.61265H12.6863C12.5263 1.9848 11.956 1.51898 11.2856 1.51898H8.70435ZM14.2071 2.61264H16.1881C18.2891 2.61264 20 4.34428 20 6.47085C20 6.47085 19.94 7.3711 19.92 8.62477C19.918 8.72401 19.8699 8.82122 19.7909 8.87996C19.3097 9.2354 18.8694 9.52907 18.8294 9.54932C17.1686 10.6632 15.2386 11.447 13.1826 11.8369C13.0485 11.8632 12.9165 11.7934 12.8484 11.6739C12.2721 10.6754 11.1956 10.0253 9.995 10.0253C8.8024 10.0253 7.71586 10.6683 7.12256 11.6678C7.05353 11.7853 6.92346 11.8531 6.7904 11.8278C4.75138 11.4369 2.82141 10.6541 1.17059 9.55945L0.210105 8.89109C0.130065 8.84046 0.08004 8.74932 0.08004 8.64806C0.050025 8.13161 0 6.47085 0 6.47085C0 4.34428 1.71086 2.61264 3.81191 2.61264H5.78289C5.97299 1.1443 7.2036 0 8.70435 0H11.2856C12.7864 0 14.017 1.1443 14.2071 2.61264ZM19.6598 10.8152L19.6198 10.8355C17.5988 12.1924 15.1676 13.0937 12.6163 13.4684C12.2561 13.519 11.8959 13.2861 11.7959 12.9216C11.5758 12.0912 10.8654 11.5443 10.015 11.5443H10.005H9.98499C9.13457 11.5443 8.42421 12.0912 8.2041 12.9216C8.10405 13.2861 7.74387 13.519 7.38369 13.4684C4.83242 13.0937 2.4012 12.1924 0.38019 10.8355C0.370185 10.8254 0.270135 10.7646 0.190095 10.8152C0.10005 10.8659 0.10005 10.9874 0.10005 10.9874L0.170085 16.1519C0.170085 18.2785 1.87094 20 3.97199 20H16.018C18.1191 20 19.8199 18.2785 19.8199 16.1519L19.9 10.9874C19.9 10.9874 19.9 10.8659 19.8099 10.8152C19.7599 10.7849 19.6999 10.795 19.6598 10.8152ZM10.7454 15.0583C10.7454 15.4836 10.4152 15.8177 9.995 15.8177C9.58479 15.8177 9.24462 15.4836 9.24462 15.0583V13.7519C9.24462 13.3367 9.58479 12.9924 9.995 12.9924C10.4152 12.9924 10.7454 13.3367 10.7454 13.7519V15.0583Z" fill="#5E5873" />
                        </svg>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant="h5"
                            component="div"
                            fontWeight={700}
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            Bee Contributor
                        </Typography>
                    </Grid>
                </Grid>
                <Typography
                    variant="body1"
                    component="div"
                    fontWeight={500}
                    sx={{
                        my: 1,
                        flexGrow: 1,
                        display: { xs: 'none', sm: 'block' }
                    }}
                >
                    (345)
                </Typography>
                <Paper
                    sx={{
                        p: '16px 13px',
                        boxShadow: 'none',
                        border: '1px solid #E0E0E0',
                        borderRadius: 1,
                    }}
                >
                    <Grid container spacing={3}>
                        <Grid item>
                            <Avatar alt="Remy Sharp" src="/photos/people.png" sx={{ width: 48, height: 48 }} />
                        </Grid>
                        <Grid item>
                            <Box display="flex" flexDirection="column" gap={0.5}>
                                <Typography
                                    sx={{
                                        textTransform: 'none',
                                        fontWeight: 700,
                                    }}
                                    variant='body2'
                                >
                                    Budi Doremi - @doremi
                                </Typography>
                                <Typography
                                    sx={{
                                        textTransform: 'none',
                                        fontWeight: 500,
                                    }}
                                    variant='body2'
                                >
                                    Join as contributor
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Paper>
        </Content>
    )
}

export const JobDetail = memo(JobDetailMemo);