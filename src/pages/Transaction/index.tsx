import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {
    Box,
    Button,
    ButtonGroup, Chip, FormControl, Grid, InputLabel, MenuItem, Pagination, Paper, Select, Tab, Tabs, Typography
} from "@mui/material";
import React, { memo } from "react";
import { Content } from "../../components";
import { DialogMyProposal } from "../../components/dialog/dialog-my-proposal";
import { useTransaction } from "./transaction.util";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ pt: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const TransactionMemo = () => {
    const [value, setValue] = React.useState(0);
    const { getProjectByWorker, getProjectByClient, set, slug, projectList } = useTransaction();

    const statusList = ["Open Tab", "WorkInProgress Tab", "Closed Tab"];

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        set("status", statusList[newValue]);
    };

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
                <Grid container sx={{ alignItems: 'flex-end', mb: 2 }} spacing={1}>
                    <Grid item>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7689 8.3818H22C22 4.98459 19.9644 3 16.5156 3H7.48444C4.03556 3 2 4.98459 2 8.33847V15.6615C2 19.0154 4.03556 21 7.48444 21H16.5156C19.9644 21 22 19.0154 22 15.6615V15.3495H17.7689C15.8052 15.3495 14.2133 13.7975 14.2133 11.883C14.2133 9.96849 15.8052 8.41647 17.7689 8.41647V8.3818ZM17.7689 9.87241H21.2533C21.6657 9.87241 22 10.1983 22 10.6004V13.131C21.9952 13.5311 21.6637 13.8543 21.2533 13.8589H17.8489C16.8548 13.872 15.9855 13.2084 15.76 12.2643C15.6471 11.6783 15.8056 11.0736 16.1931 10.6122C16.5805 10.1509 17.1573 9.88007 17.7689 9.87241ZM17.92 12.533H18.2489C18.6711 12.533 19.0133 12.1993 19.0133 11.7877C19.0133 11.3761 18.6711 11.0424 18.2489 11.0424H17.92C17.7181 11.0401 17.5236 11.1166 17.38 11.255C17.2364 11.3934 17.1555 11.5821 17.1556 11.779C17.1555 12.1921 17.4964 12.5282 17.92 12.533ZM6.73778 8.3818H12.3822C12.8044 8.3818 13.1467 8.04812 13.1467 7.63649C13.1467 7.22487 12.8044 6.89119 12.3822 6.89119H6.73778C6.31903 6.89116 5.9782 7.2196 5.97333 7.62783C5.97331 8.04087 6.31415 8.37705 6.73778 8.3818Z" fill="#5E5873" />
                        </svg>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant="h5"
                            component="div"
                            fontWeight={700}
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            Transaction
                        </Typography>
                    </Grid>
                </Grid>

                <ButtonGroup sx={{ my: 2 }} variant="outlined" aria-label="outlined button group">
                    <Button sx={{ backgroundColor: slug === 'client' ? '#028ED5' : 'inherit', color: slug === 'client' ? '#FFF' : 'inherit' }} onClick={getProjectByClient}>
                        <Typography variant='body2' sx={{ fontWeight: 500, textTransform: 'none' }}>
                            As Client
                        </Typography>
                    </Button>
                    <Button sx={{ backgroundColor: slug === 'worker' ? '#028ED5' : 'inherit', color: slug === 'worker' ? '#FFF' : 'inherit' }} onClick={getProjectByWorker}>
                        <Typography variant='body2' sx={{ fontWeight: 500, textTransform: 'none' }}>
                            As Worker
                        </Typography>
                    </Button>
                </ButtonGroup>

                <Box>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                    >
                        <Tab
                            label={
                                <Typography
                                    sx={{ textTransform: 'none', fontWeight: 700 }}
                                    variant='body2'
                                >
                                    Open
                                </Typography>
                            }
                            {...a11yProps(0)}
                        />
                        <Tab
                            label={
                                <Typography
                                    sx={{ textTransform: 'none', fontWeight: 500 }}
                                    variant='body2'
                                >
                                    Work in progress
                                </Typography>
                            }
                            {...a11yProps(1)}
                        />
                        <Tab
                            label={
                                <Typography
                                    sx={{ textTransform: 'none', fontWeight: 500 }}
                                    variant='body2'
                                >
                                    Closed
                                </Typography>
                            }
                            {...a11yProps(2)}
                        />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Grid container columnSpacing={1} sx={{ mb: -7 }}>
                        <Grid item md={1}>
                            <Typography variant='body2' color={'#4F4F4F'} fontWeight={500}>
                                Sort By:
                            </Typography>
                            <FormControl sx={{ mt: 1, mb: 10 }} size="small" fullWidth>
                                <InputLabel id="relevance-label">Newest</InputLabel>
                                <Select
                                    labelId="relevance-label"
                                    placeholder='Relevance'
                                    fullWidth
                                    label="Relevance"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Twenty</MenuItem>
                                    <MenuItem value={21}>Twenty one</MenuItem>
                                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={2}>
                            <Typography variant='body2' color={'#4F4F4F'} fontWeight={500}>
                                Filter by status
                            </Typography>
                            <FormControl sx={{ mt: 1, mb: 10 }} size="small" fullWidth>
                                <InputLabel id="relevance-label">Waiting Approval</InputLabel>
                                <Select
                                    labelId="relevance-label"
                                    placeholder='Relevance'
                                    fullWidth
                                    label="Relevance"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Twenty</MenuItem>
                                    <MenuItem value={21}>Twenty one</MenuItem>
                                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    {projectList?.map(() =>
                        <Paper
                            sx={{
                                p: '24px 16px',
                                mt: 2,
                                boxShadow: 'none',
                                border: '1px solid #E0E0E0',
                                borderRadius: 1,
                            }}
                        >
                            <Grid container justifyContent="space-between" sx={{ mb: 1 }}>
                                <Grid item>
                                    <Box display="flex" columnGap={1} alignItems="center">
                                        <img src='/icons/star.svg' alt="star" />
                                        <Typography
                                            fontWeight={600}
                                            sx={{ textTransform: 'none' }}
                                            variant='body2'
                                        >
                                            10.000
                                        </Typography>
                                        <Chip sx={{ backgroundColor: '#F9CE30', color: '#fff' }} label="Waiting Approval" />
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box display="flex" columnGap={1} alignItems="center">
                                        <DeleteOutlineOutlinedIcon />
                                        <CreateOutlinedIcon />
                                    </Box>
                                </Grid>
                            </Grid>
                            <Typography
                                fontWeight={500}
                                sx={{ textTransform: 'none' }}
                                variant='body2'
                            >
                                11 July 2022 - 18 July 2022
                            </Typography>
                            <Typography
                                fontWeight={700}
                                sx={{ textTransform: 'none', mt: 1 }}
                                variant='body1'
                            >
                                Penelitian Psikologi Terhadap Masyarakat - Translate
                            </Typography>
                            <Typography
                                fontWeight={500}
                                sx={{ textTransform: 'none' }}
                                variant='caption'
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Typography>
                            <Box display="flex" justifyContent="space-between" sx={{ mt: 2 }}>
                                <Box display="flex" columnGap={2} alignItems="center">
                                    <DialogMyProposal>
                                        <Button variant="contained" size="small">
                                            <Typography
                                                fontWeight={600}
                                                color="#fff"
                                                sx={{ textTransform: 'none' }}
                                                variant='body2'
                                            >
                                                Your Envidence
                                            </Typography>
                                        </Button>
                                    </DialogMyProposal>
                                    <Typography
                                        fontWeight={600}
                                        color="#028ED5"
                                        sx={{ textTransform: 'none' }}
                                        variant='body2'
                                    >
                                        Envidence submitted at  19 July 2022 18:00
                                    </Typography>
                                </Box>
                                <Box display="flex" columnGap={2}>
                                    <Typography
                                        fontWeight={600}
                                        color="#028ED5"
                                        sx={{ textTransform: 'none', mt: 1 }}
                                        variant='body2'
                                    >
                                        2 Attacments
                                    </Typography>
                                    <Typography
                                        fontWeight={600}
                                        color="#028ED5"
                                        sx={{ textTransform: 'none', mt: 1 }}
                                        variant='body2'
                                    >
                                        Open Project
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    )}
                    <Box display="flex" justifyContent="flex-end" sx={{ mt: 2 }}>
                        <Pagination count={1} />
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Grid container columnSpacing={1} sx={{ mb: -7 }}>
                        <Grid item md={1}>
                            <Typography variant='body2' color={'#4F4F4F'} fontWeight={500}>
                                Sort By:
                            </Typography>
                            <FormControl sx={{ mt: 1, mb: 10 }} size="small" fullWidth>
                                <InputLabel id="relevance-label">Newest</InputLabel>
                                <Select
                                    labelId="relevance-label"
                                    placeholder='Relevance'
                                    fullWidth
                                    label="Relevance"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Twenty</MenuItem>
                                    <MenuItem value={21}>Twenty one</MenuItem>
                                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={2}>
                            <Typography variant='body2' color={'#4F4F4F'} fontWeight={500}>
                                Filter by status
                            </Typography>
                            <FormControl sx={{ mt: 1, mb: 10 }} size="small" fullWidth>
                                <InputLabel id="relevance-label">Waiting Approval</InputLabel>
                                <Select
                                    labelId="relevance-label"
                                    placeholder='Relevance'
                                    fullWidth
                                    label="Relevance"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Twenty</MenuItem>
                                    <MenuItem value={21}>Twenty one</MenuItem>
                                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    {projectList?.map(() =>
                        <Paper
                            sx={{
                                p: '24px 16px',
                                mt: 2,
                                boxShadow: 'none',
                                border: '1px solid #E0E0E0',
                                borderRadius: 1,
                            }}
                        >
                            <Grid container justifyContent="space-between" sx={{ mb: 1 }}>
                                <Grid item>
                                    <Box display="flex" columnGap={1} alignItems="center">
                                        <img src='/icons/star.svg' alt="star" />
                                        <Typography
                                            fontWeight={600}
                                            sx={{ textTransform: 'none' }}
                                            variant='body2'
                                        >
                                            10.000
                                        </Typography>
                                        <Chip sx={{ backgroundColor: '#76B743BF', color: '#fff' }} label="Work in progress" />
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box display="flex" columnGap={1} alignItems="center">
                                        <DeleteOutlineOutlinedIcon />
                                        <CreateOutlinedIcon />
                                    </Box>
                                </Grid>
                            </Grid>
                            <Typography
                                fontWeight={500}
                                sx={{ textTransform: 'none' }}
                                variant='body2'
                            >
                                11 July 2022 - 18 July 2022
                            </Typography>
                            <Typography
                                fontWeight={700}
                                sx={{ textTransform: 'none', mt: 1 }}
                                variant='body1'
                            >
                                Penelitian Psikologi Terhadap Masyarakat - Translate
                            </Typography>
                            <Typography
                                fontWeight={500}
                                sx={{ textTransform: 'none' }}
                                variant='caption'
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Typography>
                            <Box columnGap={2} display="flex" justifyContent="flex-end" sx={{ mt: 2 }}>
                                <Typography
                                    fontWeight={600}
                                    color="#028ED5"
                                    sx={{ textTransform: 'none', mt: 1 }}
                                    variant='body2'
                                >
                                    2 Attacments
                                </Typography>
                                <Typography
                                    fontWeight={600}
                                    color="#028ED5"
                                    sx={{ textTransform: 'none', mt: 1 }}
                                    variant='body2'
                                >
                                    Open Project
                                </Typography>
                            </Box>
                        </Paper>
                    )}
                    <Box display="flex" justifyContent="flex-end" sx={{ mt: 2 }}>
                        <Pagination count={1} />
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Grid container columnSpacing={1} sx={{ mb: -7 }}>
                        <Grid item md={1}>
                            <Typography variant='body2' color={'#4F4F4F'} fontWeight={500}>
                                Sort By:
                            </Typography>
                            <FormControl sx={{ mt: 1, mb: 10 }} size="small" fullWidth>
                                <InputLabel id="relevance-label">Newest</InputLabel>
                                <Select
                                    labelId="relevance-label"
                                    placeholder='Relevance'
                                    fullWidth
                                    label="Relevance"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Twenty</MenuItem>
                                    <MenuItem value={21}>Twenty one</MenuItem>
                                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={2}>
                            <Typography variant='body2' color={'#4F4F4F'} fontWeight={500}>
                                Filter by status
                            </Typography>
                            <FormControl sx={{ mt: 1, mb: 10 }} size="small" fullWidth>
                                <InputLabel id="relevance-label">Waiting Approval</InputLabel>
                                <Select
                                    labelId="relevance-label"
                                    placeholder='Relevance'
                                    fullWidth
                                    label="Relevance"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Twenty</MenuItem>
                                    <MenuItem value={21}>Twenty one</MenuItem>
                                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    {projectList?.map(() =>
                        <Paper
                            sx={{
                                p: '24px 16px',
                                mt: 2,
                                boxShadow: 'none',
                                border: '1px solid #E0E0E0',
                                borderRadius: 1,
                            }}
                        >
                            <Grid container justifyContent="space-between" sx={{ mb: 1 }}>
                                <Grid item>
                                    <Box display="flex" columnGap={1} alignItems="center">
                                        <img src='/icons/star.svg' alt="star" />
                                        <Typography
                                            fontWeight={600}
                                            sx={{ textTransform: 'none' }}
                                            variant='body2'
                                        >
                                            10.000
                                        </Typography>
                                        <Chip sx={{ backgroundColor: '#028ED5', color: '#fff' }} label="Finished" />
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box display="flex" columnGap={1} alignItems="center">
                                        <DeleteOutlineOutlinedIcon />
                                        <CreateOutlinedIcon />
                                    </Box>
                                </Grid>
                            </Grid>
                            <Typography
                                fontWeight={500}
                                sx={{ textTransform: 'none' }}
                                variant='body2'
                            >
                                11 July 2022 - 18 July 2022
                            </Typography>
                            <Typography
                                fontWeight={700}
                                sx={{ textTransform: 'none', mt: 1 }}
                                variant='body1'
                            >
                                Penelitian Psikologi Terhadap Masyarakat - Translate
                            </Typography>
                            <Typography
                                fontWeight={500}
                                sx={{ textTransform: 'none' }}
                                variant='caption'
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Typography>
                            <Box columnGap={2} display="flex" justifyContent="flex-end" sx={{ mt: 2 }}>
                                <Typography
                                    fontWeight={600}
                                    color="#028ED5"
                                    sx={{ textTransform: 'none', mt: 1 }}
                                    variant='body2'
                                >
                                    2 Attacments
                                </Typography>
                                <Typography
                                    fontWeight={600}
                                    color="#028ED5"
                                    sx={{ textTransform: 'none', mt: 1 }}
                                    variant='body2'
                                >
                                    Open Project
                                </Typography>
                            </Box>
                        </Paper>
                    )}
                    <Box display="flex" justifyContent="flex-end" sx={{ mt: 2 }}>
                        <Pagination count={1} />
                    </Box>
                </TabPanel>
            </Paper>
        </Content>
    )
}

export const Transaction = memo(TransactionMemo);