import { Box, Toolbar} from "@mui/material";
import { FC, memo, useState } from "react"
import { Button } from "../button";
import { Header } from "../header";
import { Sidebar } from "../sidebar";
import styles from "./Content.module.css"
import { ContentProps } from "./Content.types";

const ContentMemo: FC<ContentProps> = ({
  children
}) => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <Header
        handleDrawerOpen={handleDrawerOpen}
      />
      <Sidebar
        open={open}
        handleDrawerClose={handleDrawerClose}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 6, backgroundColor: '#F8F8F8' }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}

export const Content = memo(ContentMemo);