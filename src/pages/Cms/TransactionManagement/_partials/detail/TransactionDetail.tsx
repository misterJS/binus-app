import { Avatar, Box, Chip, Grid, Link, Paper, Typography } from "@mui/material";
import { memo } from "react"
import TransgenderIcon from '@mui/icons-material/Transgender';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Content } from "../../../../../components";
import { Button } from "../../../../../components/button";

const TransactionDetailMemo = () => {
    return (
        <Content>
            <Box display="flex" gap={1}>
                Transaction Management
                <span> {'>'} </span>
                <Typography sx={{ color: '#028ED5' }}>detail</Typography>
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
                                    Transaction Management
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
                <Grid container sx={{ alignItems: 'center', marginBottom: 3 }} spacing={1}>
                    <Grid item>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.81 2H16.191C19.28 2 21 3.78 21 6.83V17.16C21 20.26 19.28 22 16.191 22H7.81C4.77 22 3 20.26 3 17.16V6.83C3 3.78 4.77 2 7.81 2ZM8.08 6.66V6.65H11.069C11.5 6.65 11.85 7 11.85 7.429C11.85 7.87 11.5 8.22 11.069 8.22H8.08C7.649 8.22 7.3 7.87 7.3 7.44C7.3 7.01 7.649 6.66 8.08 6.66ZM8.08 12.74H15.92C16.35 12.74 16.7 12.39 16.7 11.96C16.7 11.53 16.35 11.179 15.92 11.179H8.08C7.649 11.179 7.3 11.53 7.3 11.96C7.3 12.39 7.649 12.74 8.08 12.74ZM8.08 17.31H15.92C16.319 17.27 16.62 16.929 16.62 16.53C16.62 16.12 16.319 15.78 15.92 15.74H8.08C7.78 15.71 7.49 15.85 7.33 16.11C7.17 16.36 7.17 16.69 7.33 16.95C7.49 17.2 7.78 17.35 8.08 17.31Z" fill="#4F4F4F" />
                        </svg>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant="h5"
                            component="div"
                            fontWeight={700}
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            Proposal
                        </Typography>
                    </Grid>
                </Grid>
                <Paper
                    sx={{
                        p: '16px 13px',
                        marginBottom: 1,
                        boxShadow: 'none',
                        border: '1px solid #E0E0E0',
                        borderRadius: 1,
                    }}
                >
                    <Grid container>
                        <Grid item md={0.5}>
                            <Avatar alt="Remy Sharp" src="/photos/people.png" sx={{ width: 48, height: 48 }} />
                        </Grid>
                        <Grid item md={10}>
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
                                <Typography>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                </Typography>
                                <Box display={'flex'} gap={1} alignItems={'start'}>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1665 8.00033C14.1665 11.4063 11.4059 14.167 7.99986 14.167C4.59386 14.167 1.83319 11.4063 1.83319 8.00033C1.83319 4.59433 4.59386 1.83366 7.99986 1.83366C11.4059 1.83366 14.1665 4.59433 14.1665 8.00033Z" stroke="#5E5873" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M10.2876 9.96193L7.77423 8.4626V5.23126" stroke="#5E5873" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <Typography variant='caption'>
                                        30 Jun 2022
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={1.5} sx={{ textAlign: 'right' }}>
                            <Typography
                                sx={{
                                    textTransform: 'none',
                                    color: '#76B743'
                                }}
                            >
                                Approved
                            </Typography>
                        </Grid>
                    </Grid>

                </Paper>
                <Paper
                    sx={{
                        p: '16px 13px',
                        marginBottom: 1,
                        boxShadow: 'none',
                        border: '1px solid #E0E0E0',
                        borderRadius: 1,
                    }}
                >
                    <Grid container>
                        <Grid item md={0.5}>
                            <Avatar alt="Remy Sharp" src="/photos/people.png" sx={{ width: 48, height: 48 }} />
                        </Grid>
                        <Grid item md={10}>
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
                                <Typography>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                </Typography>
                                <Box display={'flex'} gap={1} alignItems={'start'}>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1665 8.00033C14.1665 11.4063 11.4059 14.167 7.99986 14.167C4.59386 14.167 1.83319 11.4063 1.83319 8.00033C1.83319 4.59433 4.59386 1.83366 7.99986 1.83366C11.4059 1.83366 14.1665 4.59433 14.1665 8.00033Z" stroke="#5E5873" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M10.2876 9.96193L7.77423 8.4626V5.23126" stroke="#5E5873" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <Typography variant='caption'>
                                        30 Jun 2022
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={1.5} sx={{ textAlign: 'right' }}>
                            <Typography
                                sx={{
                                    textTransform: 'none',
                                    color: '#76B743'
                                }}
                            >
                                Approved
                            </Typography>
                        </Grid>
                    </Grid>

                </Paper>
                <Paper
                    sx={{
                        p: '16px 13px',
                        marginBottom: 1,
                        boxShadow: 'none',
                        border: '1px solid #E0E0E0',
                        borderRadius: 1,
                    }}
                >
                    <Grid container>
                        <Grid item md={0.5}>
                            <Avatar alt="Remy Sharp" src="/photos/people.png" sx={{ width: 48, height: 48 }} />
                        </Grid>
                        <Grid item md={10}>
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
                                <Typography>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                </Typography>
                                <Box display={'flex'} gap={1} alignItems={'start'}>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1665 8.00033C14.1665 11.4063 11.4059 14.167 7.99986 14.167C4.59386 14.167 1.83319 11.4063 1.83319 8.00033C1.83319 4.59433 4.59386 1.83366 7.99986 1.83366C11.4059 1.83366 14.1665 4.59433 14.1665 8.00033Z" stroke="#5E5873" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M10.2876 9.96193L7.77423 8.4626V5.23126" stroke="#5E5873" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <Typography variant='caption'>
                                        30 Jun 2022
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={1.5} sx={{ textAlign: 'right' }}>
                            <Typography
                                sx={{
                                    textTransform: 'none',
                                    color: '#76B743'
                                }}
                            >
                                Approved
                            </Typography>
                        </Grid>
                    </Grid>

                </Paper>
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
                <Grid container sx={{ alignItems: 'center', marginBottom: 3 }} spacing={1}>
                    <Grid item>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.45 4.88017H16.52C20.21 4.88017 22.01 6.85017 22 10.8902V15.7602C22 19.6202 19.62 22.0002 15.75 22.0002H8.24C4.39 22.0002 2 19.6202 2 15.7502V8.24017C2 4.10017 3.84 2.00017 7.47 2.00017H9.05C9.981 1.99017 10.85 2.42017 11.42 3.15017L12.3 4.32017C12.58 4.67017 13 4.88017 13.45 4.88017ZM7.37 15.2902H16.63C17.04 15.2902 17.37 14.9502 17.37 14.5402C17.37 14.1202 17.04 13.7902 16.63 13.7902H7.37C6.95 13.7902 6.62 14.1202 6.62 14.5402C6.62 14.9502 6.95 15.2902 7.37 15.2902Z" fill="#4F4F4F" />
                        </svg>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant="h5"
                            component="div"
                            fontWeight={700}
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            Contributor Evidence
                        </Typography>
                    </Grid>
                </Grid>
                <Paper
                    sx={{
                        p: '16px 13px',
                        marginBottom: 1,
                        boxShadow: 'none',
                        border: '1px solid #E0E0E0',
                        borderRadius: 1,
                    }}
                >
                    <Grid container>
                        <Grid item md={0.5}>
                            <Avatar alt="Remy Sharp" src="/photos/people.png" sx={{ width: 48, height: 48 }} />
                        </Grid>
                        <Grid item md={10}>
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
                                <Box display={'flex'}>
                                    <img src="/photos/evidence.png" width="200" style={{ margin: 8 }} />
                                    <img src="/photos/evidence.png" width="200" style={{ margin: 8 }} />
                                    <img src="/photos/evidence.png" width="200" style={{ margin: 8 }} />
                                </Box>
                                <Box display={'flex'} gap={1} alignItems={'start'}>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1665 8.00033C14.1665 11.4063 11.4059 14.167 7.99986 14.167C4.59386 14.167 1.83319 11.4063 1.83319 8.00033C1.83319 4.59433 4.59386 1.83366 7.99986 1.83366C11.4059 1.83366 14.1665 4.59433 14.1665 8.00033Z" stroke="#5E5873" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M10.2876 9.96193L7.77423 8.4626V5.23126" stroke="#5E5873" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <Typography variant='caption'>
                                        30 Jun 2022
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={1.5} sx={{ textAlign: 'right' }}>
                            <Typography
                                sx={{
                                    textTransform: 'none',
                                    color: '#76B743'
                                }}
                            >
                                Approved
                            </Typography>
                        </Grid>
                    </Grid>

                </Paper>
            </Paper>
        </Content>
    )
}

export const TransactionDetail = memo(TransactionDetailMemo);