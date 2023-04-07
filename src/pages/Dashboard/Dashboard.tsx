import { Search } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  createTheme,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
  Typography
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AddUserBold, TwoUsersBold, WalletBold, WorkBold } from '../../assets/icon-apps';
import { LeafCurved } from '../../assets/icon-sidebar';
import { Content } from '../../components/content';
import { DialogUsername } from '../../components/dialog/dialog-validate-username';
import { Leaderboards } from '../_partials/Leaderboards';
import { paperStyles, subtitleStyles, titleStyles } from './Dashboard.style';

const THEME = createTheme({
  typography: {
    "fontFamily": `"montserrat", sans-serif`
  },
  palette: {
    primary: {
      main: '#FFFFFF'
    },
  },
});

function createData(
  name: string,
) {
  return { name };
}

const rows = [
  createData('Budi Doremi - @doremi'),
  createData('Budi Doremi - @doremi'),
  createData('Budi Doremi - @doremi'),
];

function Dashboard() {
  const auth = useSelector((state: any) => state.client.auth)
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (auth?.loginSso) {
      setIsOpen(true)
    }
  }, [auth?.loginSso])

  return (
    <ThemeProvider theme={THEME}>
      <Content>
        <Grid container alignItems='center' spacing={2} mb={2}>
          <Grid item md={8}>
            <Paper sx={paperStyles}>
              <Typography sx={titleStyles}>Autoslide</Typography>
              <Typography sx={titleStyles}>(300 x 400)</Typography>
            </Paper>
          </Grid>
          <Grid item md={4}>
            <Paper sx={paperStyles}>
              <Typography sx={subtitleStyles}>Bee Colony</Typography>
              <Typography sx={subtitleStyles}>Share your thoughts!</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Paper elevation={0} sx={{ border: '1px solid #E0E0E0', borderRadius: 3, textAlign: 'center', marginBottom: 2, padding: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 3, gap: 1 }}>
            <AddUserBold />
            <Typography sx={{ fontSize: 20, color: '#4F4F4F' }}>Sting Your Mates!</Typography>
          </Box>
          <Paper component="form" elevation={0} sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', border: '1px solid #E0E0E0', borderRadius: 5 }}>
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <Search />
            </IconButton>
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Username" inputProps={{ 'aria-label': 'Username' }} />
          </Paper>
        </Paper>
        <Grid container sx={{ marginBottom: 2 }} spacing={2}>
          <Grid item md={6}>
            <TableContainer elevation={0} sx={{ border: '1px solid #E0E0E0', borderRadius: 3, overflowX: 'hidden' }} component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ display: 'flex', alignItems: 'center', marginBottom: 3 }}>
                      <LeafCurved />
                      <Typography variant='h6' fontWeight={700}>Garden</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <Grid container justifyContent={'space-between'}>
                          <Grid item xs={10} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Typography variant='body2' color={'#5E5873'} fontWeight={700}>
                              {row.name}
                            </Typography>
                            <Typography>
                              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </Typography>
                            <Box display={'flex'} gap={1} alignItems={'start'}>
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.1665 8.00033C14.1665 11.4063 11.4059 14.167 7.99986 14.167C4.59386 14.167 1.83319 11.4063 1.83319 8.00033C1.83319 4.59433 4.59386 1.83366 7.99986 1.83366C11.4059 1.83366 14.1665 4.59433 14.1665 8.00033Z" stroke="#5E5873" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10.2876 9.96193L7.77423 8.4626V5.23126" stroke="#5E5873" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
          </Grid>
          <Grid item md={6}>
            <Paper
              elevation={0}
              sx={{ border: '1px solid #E0E0E0', borderRadius: 3, padding: 3, minHeight: '690px', ...{ alignItems: 'center', textAlign: 'center' } }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2, gap: 1 }}>
                <WorkBold />
                <Typography variant='h6' fontWeight={700}>Leaderboard</Typography>
              </Box>
              <Leaderboards />
            </Paper>
          </Grid>
        </Grid>
        <Grid container alignItems='center' spacing={2}>
          <Grid item md={6}>
            <Paper sx={{ border: '1px solid #E0E0E0', borderRadius: 3, padding: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2, gap: 1 }}>
                <WalletBold />
                <Typography variant='h6' fontWeight={700}>Transaction</Typography>
              </Box>
              <Typography variant='body1' fontWeight={700}>Aplly Mission</Typography>
              {rows.map((row) => (
                <Paper sx={{ border: '1px solid #E0E0E0', borderRadius: 3, padding: 2, marginY: 3 }}>
                  <Grid container alignItems='center'>
                    <Grid item xs={1}>
                      <Avatar />
                    </Grid>
                    <Grid item xs={7} sx={{ display: 'flex', marginLeft: 2, flexDirection: 'column', gap: 1 }}>
                      <Typography variant='body2' color='#5E5873' fontWeight={700}>
                        {row.name}
                      </Typography>
                      <Typography fontWeight={600}>
                        Translating Thesis
                      </Typography>
                    </Grid>
                    <Grid item xs={2} textAlign='right'>
                      <Button color='error' variant='contained'>Disqualified</Button>
                    </Grid>
                  </Grid>
                </Paper>
              ))}
            </Paper>
          </Grid>
          <Grid item md={6}>
            <Paper sx={{ border: '1px solid #E0E0E0', borderRadius: 3, padding: 3, minHeight: '476px' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2, gap: 1 }}>
                <WalletBold />
                <Typography variant='h6' fontWeight={700}>Transaction</Typography>
              </Box>
              <Typography variant='body1' fontWeight={700}>Posting Mission</Typography>
              {rows.map((row) => (
                <Paper sx={{ border: '1px solid #E0E0E0', borderRadius: 3, padding: 2, marginY: 3 }}>
                  <Grid container alignItems='center'>
                    <Grid item xs={8} sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      <Typography fontWeight={600}>
                        Paraphrasing Psikologi
                      </Typography>
                    </Grid>
                    <Grid item xs={4} textAlign='right'>
                      <Button color='info' variant='contained'>Open</Button>
                    </Grid>
                  </Grid>
                </Paper>
              ))}
            </Paper>
          </Grid>
        </Grid>
        <Paper elevation={0} sx={{ border: '1px solid #E0E0E0', borderRadius: 3, alignItems: 'center', textAlign: 'center', padding: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2, gap: 1 }}>
            <TwoUsersBold />
            <Typography variant='h6' fontWeight={700}>Community Activities</Typography>
          </Box>
          {rows.map((row) => (
            <Paper elevation={0} sx={{ border: '1px solid #E0E0E0', borderRadius: 3, alignItems: 'center', textAlign: 'center', padding: 3, my: 3 }}>
              <Grid container alignItems="center">
                <Grid item xs={1}>
                  <Avatar />
                </Grid>
                <Grid item xs={9} sx={{ textAlign: 'left', gap: 1 }}>
                  <Typography variant='body2' color={'#5E5873'} fontWeight={700}>
                    {row.name}
                  </Typography>
                  <Typography sx={{ textDecoration: 'underline', color: '#028ED5' }}>
                    Penelitian sosial masyarakat terhadap pandangan anak dan sosial media
                  </Typography>
                  <Box display={'flex'} gap={1} alignItems={'start'}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1665 8.00033C14.1665 11.4063 11.4059 14.167 7.99986 14.167C4.59386 14.167 1.83319 11.4063 1.83319 8.00033C1.83319 4.59433 4.59386 1.83366 7.99986 1.83366C11.4059 1.83366 14.1665 4.59433 14.1665 8.00033Z" stroke="#5E5873" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10.2876 9.96193L7.77423 8.4626V5.23126" stroke="#5E5873" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <Typography variant='caption'>
                      30 Jun 2022
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={2} textAlign="right">
                  <Typography variant='caption' color={'#76B743'}>
                    Post a project
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </Paper>
        <DialogUsername
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </Content>
    </ThemeProvider>
  );
}

export default Dashboard;
