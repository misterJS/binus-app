import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import {
  createTheme,
  ThemeProvider
} from '@mui/material';
import { Toaster } from "react-hot-toast";
import { msalConfig } from "../authConfig";
import AdminRoutes from '../routes/AdminRoutes';
import UserRoutes from '../routes/UserRoutes';

const THEME = createTheme({
  typography: {
    "fontFamily": `"montserrat", sans-serif`
  },
  palette: {
    text: {
      disabled: '#000'
    },
  }
});

function App() {
  const msalInstance = new PublicClientApplication(msalConfig);

  return (
    <MsalProvider instance={msalInstance}>
      <ThemeProvider theme={THEME}>
        <div className="App">
          <AdminRoutes />
          <UserRoutes />
          <Toaster />
        </div>
      </ThemeProvider>
    </MsalProvider>
  );
}

export default App;
