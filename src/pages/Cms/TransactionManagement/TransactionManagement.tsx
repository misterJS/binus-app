import { Box, Paper, Tab, Tabs, Typography } from "@mui/material";
import { memo, useState } from "react";
import { ActivityBold } from "../../../assets/icon-apps";
import { Content } from "../../../components";
import { useTransactionManagement } from "./TransactionManagement.utils";
import { ListRanking } from "./_partials";

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const TransactionManagementMemo = () => {
    const { setParams } = useTransactionManagement();
    const [value, setValue] = useState(0);

    const tabs = ["approval", "active", "closed"];

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        setParams("tab", tabs[newValue]);
    };

    return (
        <>
            <Content>
                <Paper
                    sx={{
                        p: '24px 16px',
                        borderRadius: 1,
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1 }}  >
                        <ActivityBold />
                        <Typography variant='h5' color={'#5E5873'} fontWeight={700}>
                            Transaction Management
                        </Typography>
                    </Box>
                    <Box marginTop={3}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                        >
                            {[
                                { label: "Approval", fontWeight: 700, index: 0 },
                                { label: "Active", fontWeight: 500, index: 1 },
                                { label: "Closed", fontWeight: 500, index: 2 },
                            ].map((tab) => (
                                <Tab
                                    key={tab.index}
                                    label={
                                        <Typography sx={{ textTransform: "none", fontWeight: tab.fontWeight }} variant="body2">
                                            {tab.label}
                                        </Typography>
                                    }
                                    {...a11yProps(tab.index)}
                                />
                            ))}
                        </Tabs>
                    </Box>
                    <ListRanking />
                </Paper>
            </Content>
        </>
    )
}

export const TransactionManagement = memo(TransactionManagementMemo)