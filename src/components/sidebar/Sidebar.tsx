import {
    Box,
    Divider,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material"
import MuiDrawer from '@mui/material/Drawer';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import { FC, memo } from "react"
import { Button } from "../button"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { SidebarProps } from "./Sidebar.types";
import { useNavigate } from "react-router-dom";
import { useBeesearch, useCms } from "./_partials";

const drawerWidth = 260;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    textAlign: 'center',
    width: `calc(${theme.spacing(10)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(10)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0.8, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const SideBarMemo: FC<SidebarProps> = ({
    open,
    handleDrawerClose
}) => {
    const user = JSON.parse(localStorage.getItem('userData') as any);
    const navigate = useNavigate()
    const theme = useTheme();
    const menu = useBeesearch();
    const menuCms = useCms();

    return (
        <>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Grid container spacing={1} sx={{ paddingX: 1, marginTop: 3, alignItems: 'center', justifyContent: 'center' }}>
                    <Grid item>
                        <img
                            alt="beeSearch"
                            src={'/photos/appslogo.png'}
                            style={{ width: 46, height: 46 }}
                        />
                    </Grid>
                    {open &&
                        <Grid sm={7} item sx={{ textAlign: 'left' }}>
                            <Typography
                                variant="body1"
                                component="div"
                                color={'#007BFF'}
                                fontWeight={700}
                                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                            >
                                Beesearch
                            </Typography>
                            <Typography
                                variant="body1"
                                color={'#007BFF'}
                                component="div"
                                fontWeight={700}
                                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                            >
                                Buddies
                            </Typography>
                        </Grid>
                    }
                    {open && <Grid item onClick={handleDrawerClose}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" fill="#050401" />
                        </svg>
                    </Grid>
                    }
                </Grid>
                <Box sx={{ display: 'flex', paddingX: 1, flexDirection: 'column', gap: 1, marginY: 2 }}>
                    {user?.roleID === "1" ? <><Button
                        color="secondary"
                        variant="text"
                        withIcon
                    >
                        <img alt="berlian" src="/photos/use-cms.png" />
                        {open && <span style={{ textTransform: 'capitalize', color: '#000' }}>Bayu Kusmo</span>}
                    </Button>
                        <Button
                            color="info"
                            variant="contained"
                            withIcon
                        >
                            <img alt="berlian" src="/photos/bee.png" />
                            {open && <span style={{ textTransform: 'capitalize' }}>Beekeeper</span>}
                        </Button>
                        <Button
                            color="info"
                            variant="contained"
                            withIcon
                        >
                            <img alt="berlian" src="/photos/sketch-logo.png" />
                            {open && <>Honey Bee</>}
                        </Button>
                    </> : <>
                        <Button
                            color="warning"
                            variant="contained"
                            withIcon
                        >
                            {open &&
                                <svg style={{ marginRight: 10 }} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99985 20C4.48574 20 0 15.5142 0 10.0002C0 4.48581 4.48574 0 9.99985 0C15.514 0 20 4.48581 20 10.0002C20 15.5142 15.514 20 9.99985 20Z" fill="#FEEEB7" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0633 14.7368L9.97893 13.3185L6.88288 14.7056L7.15036 11.0255L5 8.20013L8.24974 7.34376L10.0166 4.21053L11.7575 7.3616L15 8.25055L12.8263 11.0541L13.0633 14.7368Z" fill="#FDAD00" />
                                </svg>
                            }
                            10.000
                        </Button>
                    </>}
                </Box>
                <Divider />
                <List>
                    {user?.roleID === "2" && menu.map((list, index) => (
                        <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                onClick={() => navigate(list.url)}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : '0px',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {list.icon}
                                </ListItemIcon>
                                {open && <ListItemText primary={list.name} />}
                            </ListItemButton>
                        </ListItem>
                    ))}
                    {user?.roleID === "1" && menuCms.map((list, index) => (
                        <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                onClick={() => navigate(list.url)}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : '0px',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {list.icon}
                                </ListItemIcon>
                                {open && <ListItemText primary={list.name} />}
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    )
}

export const Sidebar = memo(SideBarMemo)