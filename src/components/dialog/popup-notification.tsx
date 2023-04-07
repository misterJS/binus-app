import { Divider, Box, Menu, MenuItem, Typography } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { FC, memo, ReactNode, useState } from "react"
import { AddUserBold, LogoutBold, PasswordBold } from "../../assets/icon-apps";

interface PopupNotificationProps {
    children: ReactNode
}

const PopupNotificationMemo: FC<PopupNotificationProps> = (props) => {
    const { children } = props
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <span onClick={handleClick}>
                {children}
            </span>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem sx={{ display: 'flex', gap: 10, flexDirection: 'row' }}>
                    <Box>
                        <Typography fontWeight={700}>
                            Admin memposting misi baru tentang:
                        </Typography>
                        <Typography>
                            “Questionnaire Psikologi”
                        </Typography>
                    </Box>
                    <Box display="flex" sx={{ mb: 0.5 }} gap={0.5}>
                        <AccessTimeIcon htmlColor="#5E5873" />
                        <Typography
                            sx={{ textTransform: 'none' }}
                            variant='body2'
                        >
                            30 Juni 2022
                        </Typography>
                    </Box>
                </MenuItem>
                <Divider />
                <MenuItem sx={{ display: 'flex', gap: 10, flexDirection: 'row' }}>
                    <Box>
                        <Typography fontWeight={700}>
                            Admin memposting misi baru tentang:
                        </Typography>
                        <Typography>
                            “Questionnaire Psikologi”
                        </Typography>
                    </Box>
                    <Box display="flex" sx={{ mb: 0.5 }} gap={0.5}>
                        <AccessTimeIcon htmlColor="#5E5873" />
                        <Typography
                            sx={{ textTransform: 'none' }}
                            variant='body2'
                        >
                            30 Juni 2022
                        </Typography>
                    </Box>
                </MenuItem>
                <Divider />
                <MenuItem sx={{ display: 'flex', gap: 10, flexDirection: 'row' }}>
                    <Box>
                        <Typography fontWeight={700}>
                            Admin memposting misi baru tentang:
                        </Typography>
                        <Typography>
                            “Questionnaire Psikologi”
                        </Typography>
                    </Box>
                    <Box display="flex" sx={{ mb: 0.5 }} gap={0.5}>
                        <AccessTimeIcon htmlColor="#5E5873" />
                        <Typography
                            sx={{ textTransform: 'none' }}
                            variant='body2'
                        >
                            30 Juni 2022
                        </Typography>
                    </Box>
                </MenuItem>
            </Menu>
        </>
    )
}

export const PopupNotification = memo(PopupNotificationMemo)