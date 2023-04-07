import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, List, ListItem, ListItemText, Menu, MenuItem, Typography } from "@mui/material";
import { FC, memo, ReactNode, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { AddUserBold, LogoutBold, PasswordBold } from "../../assets/icon-apps";
import { DialogChangePassword } from "./dialog-change-password";
import { useNavigate } from "react-router-dom";
import { handleLogoutThunk } from "../../store/client";

interface PopupUserProps {
    children: ReactNode
}

const PopupUserMemo: FC<PopupUserProps> = (props) => {
    const { children } = props
    const navigate = useNavigate()
    const auth = useSelector((state: any) => state.client.auth)

    useEffect(() => {
        if (auth?.logoutState !== '') {
            navigate('/login')
        }
    }, [auth?.logoutState])

    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
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
                <MenuItem onClick={() => navigate('/user')} sx={{ display: 'flex', gap: 1, flexDirection: 'row'}}>
                    <AddUserBold /> Profile
                </MenuItem>
                <MenuItem onClick={() => setIsOpen(true)} sx={{ display: 'flex', gap: 1, flexDirection: 'row'}}>
                    <PasswordBold /> Change Password
                </MenuItem>
                <MenuItem onClick={() => dispatch(handleLogoutThunk())} sx={{ display: 'flex', gap: 1, flexDirection: 'row'}}>
                    <LogoutBold /> Logout
                </MenuItem>
            </Menu>
            <DialogChangePassword 
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </>
    )
}

export const PopupUser = memo(PopupUserMemo)