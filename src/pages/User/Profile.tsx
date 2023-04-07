import { memo, useEffect } from "react"
import {
    Paper,
    Grid,
    Typography,
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
} from "@mui/material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import { Content } from "../../components";
import { useProfile } from "./Profile.utils";
import { useNavigate } from "react-router-dom";
import moment from "moment";

function createData(
    name: string,
) {
    return { name };
}

const rows = [
    createData('Quetionare Psikologi - @doremi (On Going)'),
    createData('Quetionare Psikologi - @doremi (On Going)'),
    createData('Quetionare Psikologi - @doremi (On Going)'),
];

const ProfileMemo = () => {
    const navigate = useNavigate()
    const { getProfilesData, profile } = useProfile();
    useEffect(() => {
        if (profile.profiles === null) {
            getProfilesData()
        }
    }, [profile.profiles])

    return (
        <Content>
            <Paper
                sx={{
                    p: '24px 16px',
                    mt: 3,
                    boxShadow: 'none',
                    border: '1px solid #E0E0E0',
                    borderRadius: 1,
                }}
            >
                <Grid container sx={{ alignItems: 'center', mb: 2 }} spacing={1}>
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
                            Profile
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item md={4}>
                        <Grid container columnSpacing={2}>
                            <Grid item>
                                <img
                                    src={profile?.profiles?.returnValue[0]?.photo}
                                    alt="user profile"
                                    style={{ borderRadius: 6 }}
                                    width={104}
                                    height={104}
                                />
                            </Grid>
                            <Grid item>
                                <Box display="flex" gap={0.5} alignItems="center">
                                    <Typography
                                        sx={{ textTransform: 'none' }}
                                        variant='body1'
                                    >
                                        {profile?.profiles?.returnValue[0]?.fullName}
                                    </Typography>
                                    <img src='/photos/sketch-logo.png' alt="user" height={15} />
                                </Box>
                                <Typography
                                    sx={{ textTransform: 'none', mb: 2 }}
                                    variant='body2'
                                >
                                    {profile?.profiles?.returnValue[0]?.email}
                                </Typography>
                                <Button variant="contained" onClick={() => navigate("/user/edit-profile")}>
                                    <Typography
                                        sx={{ textTransform: 'none', fontWeight: 500 }}
                                        variant='body2'
                                    >
                                        Edit Profile
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={4}>
                        <Box display="flex" sx={{ mb: 0.5 }} gap={10}>
                            <Box display="flex" sx={{ mb: 0.5 }} gap={0.5}>
                                <PersonOutlineOutlinedIcon htmlColor="#5E5873" />
                                <Typography
                                    sx={{ textTransform: 'none' }}
                                    variant='body2'
                                >
                                    Nim
                                </Typography>
                            </Box>
                            <Typography
                                sx={{ textTransform: 'none' }}
                                variant='body2'
                            >
                                : {profile?.profiles?.returnValue[0]?.nim}
                            </Typography>
                        </Box>
                        <Box display="flex" sx={{ mb: 0.5 }} gap={0.5}>
                            <Box display="flex" sx={{ mb: 0.5 }} gap={0.5}>
                                <BusinessCenterOutlinedIcon htmlColor="#5E5873" />
                                <Typography
                                    sx={{ textTransform: 'none' }}
                                    variant='body2'
                                >
                                    Office/University
                                </Typography>
                            </Box>
                            <Typography
                                sx={{ textTransform: 'none' }}
                                variant='body2'
                            >
                                : Binus Kemanggisan
                            </Typography>
                        </Box>
                        <Box display="flex" sx={{ mb: 0.5 }} gap={4.9}>
                            <Box display="flex" sx={{ mb: 0.5 }} gap={0.5}>
                                <CalendarMonthOutlinedIcon htmlColor="#5E5873" />
                                <Typography
                                    sx={{ textTransform: 'none' }}
                                    variant='body2'
                                >
                                    Year Class
                                </Typography>
                            </Box>
                            <Typography
                                sx={{ textTransform: 'none' }}
                                variant='body2'
                            >
                                : {profile?.profiles?.returnValue[0]?.yearClass}
                            </Typography>
                        </Box>
                        <Box display="flex" sx={{ mb: 0.5 }} gap={9}>
                            <Box display="flex" sx={{ mb: 0.5 }} gap={0.5}>
                                <ArticleOutlinedIcon htmlColor="#5E5873" />
                                <Typography
                                    sx={{ textTransform: 'none' }}
                                    variant='body2'
                                >
                                    Major
                                </Typography>
                            </Box>
                            <Typography
                                sx={{ textTransform: 'none' }}
                                variant='body2'
                            >
                                : {profile?.profiles?.returnValue[0]?.major}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4}>
                        <Box display="flex" sx={{ mb: 0.5 }} gap={9}>
                            <Box display="flex" sx={{ mb: 0.5 }} gap={0.5}>
                                <EmailOutlinedIcon htmlColor="#5E5873" />
                                <Typography
                                    sx={{ textTransform: 'none' }}
                                    variant='body2'
                                >
                                    Email
                                </Typography>
                            </Box>
                            <Typography
                                sx={{ textTransform: 'none' }}
                                variant='body2'
                            >
                                : {profile?.profiles?.returnValue[0]?.email}
                            </Typography>
                        </Box>
                        <Box display="flex" sx={{ mb: 0.5 }} gap={5.6}>
                            <Box display="flex" sx={{ mb: 0.5 }} gap={0.5}>
                                <PhoneOutlinedIcon htmlColor="#5E5873" />
                                <Typography
                                    sx={{ textTransform: 'none' }}
                                    variant='body2'
                                >
                                    Phone No
                                </Typography>
                            </Box>
                            <Typography
                                sx={{ textTransform: 'none' }}
                                variant='body2'
                            >
                                : {profile?.profiles?.returnValue[0]?.phoneNo}
                            </Typography>
                        </Box>
                        <Box display="flex" sx={{ mb: 0.5 }} gap={2.1}>
                            <Box display="flex" sx={{ mb: 0.5 }} gap={0.5}>
                                <GroupsOutlinedIcon htmlColor="#5E5873" />
                                <Typography
                                    sx={{ textTransform: 'none' }}
                                    variant='body2'
                                >
                                    Member Since
                                </Typography>
                            </Box>
                            <Typography
                                sx={{ textTransform: 'none' }}
                                variant='body2'
                            >
                                : {moment(profile?.profiles?.returnValue[0]?.memberSince).format("DD-MM-YYYY")}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Typography variant='body1' color={'#5E5873'} fontWeight={700} sx={{ marginTop: 2 }}>
                    Bio:
                </Typography>
                <Typography variant='subtitle2' color={'#5E5873'}>
                    {profile?.profiles?.returnValue[0]?.bio}
                </Typography>
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
                <Grid container sx={{ alignItems: 'center', mb: 2 }} spacing={1}>
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
                            Contribution Journey
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container columnSpacing={2}>
                    <Grid item md={4}>
                        <Paper
                            sx={{
                                p: '24px 16px',
                                mt: 1,
                                boxShadow: 'none',
                                border: '1px solid #E0E0E0',
                                borderRadius: 1,
                            }}
                        >
                            <Box display="flex" justifyContent="space-between">
                                <Box>
                                    <Typography variant='h4' color={'#5E5873'} fontWeight={700}>
                                        {profile?.contributionJourney?.returnValue[0]?.missionComplete || 0}
                                    </Typography>
                                    <Typography variant='subtitle2' color={'#5E5873'}>
                                        Completion Mission
                                    </Typography>
                                </Box>
                                <img src='/photos/Present.png' alt="Present" height={56} />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item md={4}>
                        <Paper
                            sx={{
                                p: '24px 16px',
                                mt: 1,
                                boxShadow: 'none',
                                border: '1px solid #E0E0E0',
                                borderRadius: 1,
                            }}
                        >
                            <Box display="flex" justifyContent="space-between">
                                <Box>
                                    <Typography variant='h4' color={'#5E5873'} fontWeight={700}>
                                        {profile?.contributionJourney?.returnValue[0]?.allMission || 0}
                                    </Typography>
                                    <Typography variant='subtitle2' color={'#5E5873'}>
                                        Apply Mission
                                    </Typography>
                                </Box>
                                <img src='/photos/verified.png' alt="verified" height={56} />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item md={4}>
                        <Paper
                            sx={{
                                p: '24px 16px',
                                mt: 1,
                                boxShadow: 'none',
                                border: '1px solid #E0E0E0',
                                borderRadius: 1,
                            }}
                        >
                            <Box display="flex" justifyContent="space-between">
                                <Box>
                                    <Typography variant='h4' color={'#5E5873'} fontWeight={700}>
                                        {profile?.contributionJourney?.returnValue[0]?.jobPosting || 0}
                                    </Typography>
                                    <Typography variant='subtitle2' color={'#5E5873'}>
                                        Job Post
                                    </Typography>
                                </Box>
                                <img src='/photos/computer.png' alt="computer" height={56} />
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>

            <Box display="flex" gap={2}>
                <TableContainer elevation={0} sx={{ border: '1px solid #E0E0E0', borderRadius: 1, mt: 2 }} component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ borderBottom: 'none' }}>
                                    <Grid container sx={{ alignItems: 'flex-end' }} spacing={1}>
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
                                                List of Job Post
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {profile?.listJobPost?.returnValue?.length === 0 ?
                                <Typography sx={{ textAlign: 'center' }}>no data available</Typography>
                                : profile?.listJobPost?.returnValue?.map((row: any) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            <Grid container justifyContent={'space-between'}>
                                                <Grid item xs={10}>
                                                    <Typography variant='body2' color={'#5E5873'} fontWeight={700}>
                                                        {row.name}
                                                    </Typography>
                                                    <Typography sx={{ my: 1 }}>
                                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
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
                                                </Grid>
                                            </Grid>
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TableContainer elevation={0} sx={{ border: '1px solid #E0E0E0', borderRadius: 1, mt: 2 }} component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ borderBottom: 'none' }}>
                                    <Grid container sx={{ alignItems: 'flex-end' }} spacing={1}>
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
                                                List of Mission
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {profile?.listMission?.returnValue?.length === 0 ?
                                <Typography sx={{ textAlign: 'center', mb: '50px' }}>no data available</Typography>
                                : profile?.listMission?.returnValue?.map((row: any) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            <Grid container justifyContent={'space-between'}>
                                                <Grid item xs={10}>
                                                    <Typography variant='body2' color={'#5E5873'} fontWeight={700}>
                                                        {row.name}
                                                    </Typography>
                                                    <Typography sx={{ my: 1 }}>
                                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
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
                                                </Grid>
                                            </Grid>
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Content>
    )
}

export const Profile = memo(ProfileMemo);