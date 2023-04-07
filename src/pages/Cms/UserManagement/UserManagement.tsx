import {
    Box,
    IconButton,
    InputBase,
    Paper,
    Tab,
    Tabs,
    Typography
} from '@mui/material';
import { People } from '@mui/icons-material';
import { Content } from '../../../components/content';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { ListUsers } from './_partials/ListUsers';
import { TwoUsersBold } from '../../../assets/icon-apps';

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

function UserManagement() {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    return (
        <Content>
            <Paper
                sx={{
                    p: '24px 16px',
                    borderRadius: 1,
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1 }}  >
                    <TwoUsersBold sx={{ color: '#5E5873' }} />
                    <Typography variant='h5' color={'#5E5873'} fontWeight={700}>
                        User Management
                    </Typography>
                </Box>
                <Box marginTop={3}>
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
                                    List User
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
                                    Verivy User
                                </Typography>
                            }
                            {...a11yProps(1)}
                        />
                    </Tabs>
                </Box>
                <Box marginBottom={3} marginTop={2}>
                    <Paper
                        component="form"
                        elevation={0}
                        sx={{
                            p: '2px 4px',
                            display: 'flex',
                            alignItems: 'center',
                            border: '1px solid #E0E0E0',
                            borderRadius: 5
                        }}
                    >
                        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search..."
                            inputProps={{ 'aria-label': 'Search...' }}
                        />
                    </Paper>
                </Box>
                <ListUsers />
            </Paper>
        </Content>
    );
}

export default UserManagement;
