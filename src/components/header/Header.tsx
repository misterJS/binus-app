import { AppBar, Avatar, CssBaseline, Grid, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Box, Container } from "@mui/system";
import { FC, memo, useEffect } from "react"
import { HeaderProps } from "./Header.types";
import { PopupUser } from "../dialog/popup-user";
import { PopupNotification } from "../dialog/popup-notification";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderMemo: FC<HeaderProps> = ({
    handleDrawerOpen
}) => {
    const navigate = useNavigate()
    const auth = localStorage.getItem("token")

    useEffect(() => {
        if (!auth) {
            navigate('/login')
        }
    }, [])

    return (
        <>
            <CssBaseline />
            <AppBar elevation={0} position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, borderBottom: '1px solid #E0E0E0', background: '#ffffff', color: '#4F4F4F' }}>
                <Toolbar>
                    <Container maxWidth="xs">
                        <img onClick={handleDrawerOpen} alt="logo" src={'/photos/binus.png'} />
                    </Container>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                    </Typography>

                    <Box sx={{ flexGrow: 0, alignItems: 'center' }}>
                        <Tooltip title="Open settings">
                            <Grid
                                container
                                spacing={2}
                                sx={{ alignItems: 'center' }}
                            >
                                <Grid item sx={{ mt: 1 }}>
                                    <PopupNotification>
                                        <NotificationsNoneIcon fontSize="small" />
                                    </PopupNotification>
                                </Grid>
                                <Grid item>
                                    <IconButton onClick={() => console.log('Click IconButton')} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src="/photos/people.png" sx={{ width: 24, height: 24 }} />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        variant="caption"
                                        component="div"
                                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                                    >
                                        Profile
                                    </Typography>
                                </Grid>
                                <Grid item sx={{ mt: 1 }}>
                                    <PopupUser>
                                        <KeyboardArrowDownIcon fontSize="small" />
                                    </PopupUser>
                                </Grid>
                            </Grid>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export const Header = memo(HeaderMemo);