import './Dashboard.css'
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import { Typography } from '@mui/material';
import { ThemeSwitcher } from '@toolpad/core/DashboardLayout';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import { SiYoutubeshorts } from "react-icons/si";
import { FaHistory } from "react-icons/fa";
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';
import Login from './Login'
import Content from './Content'

const NAVIGATION = [
  {
    segment: 'home',
    title: 'Home',
    icon: <HomeSharpIcon/>,
  },
  {
    segment: 'shorts',
    title: 'Shorts',
    icon: <SiYoutubeshorts />,
  },
  {
    segment: 'subscription',
    title: 'Subscription',
    icon: <SubscriptionsOutlinedIcon/>,
  },
  { kind: 'divider' },
  {
    segment: 'history',
    title: 'History',
    icon: <FaHistory />,
  },
  {
    segment: 'playlists',
    title: 'Playlists',
    icon: <PlaylistAddOutlinedIcon />,
  },
  {
    segment: 'yourVideos',
    title: 'Your videos',
    icon: <SmartDisplayOutlinedIcon />,
  },
  {
    segment: 'yourCourses',
    title: 'Your Courses',
    icon: <SchoolOutlinedIcon />,
  },
  {
    segment: 'watchLater',
    title: 'Watch Later',
    icon: <WatchLaterOutlinedIcon />,
  },
  {
    segment: 'likedVideos',
    title: 'Liked videos',
    icon: <ThumbUpOutlinedIcon />,
  },
  {
    segment: 'yourClips',
    title: 'Your clips',
    icon: <ContentCutOutlinedIcon />,
  },
];

const demoTheme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: {
    light: {
      palette: {
        background: {
          default: '#ffffff',
          paper: '#ffffff',
        },
        primary:{
          main:'#000000'
        },
      },
    },
    dark: {
      palette: {
        background: {
          default: '#020202',
          paper: '#000000',
        },
        primary:{
          main:'#ffffff'
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent() {
  return (
    <Box
      sx={{
        // py: 6,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Content/>
    </Box>
  );
}

function ToolbarActionsSearch() {
  return (
    <Stack direction="row" >
      <div className='center'>
      <Tooltip title="Search" enterDelay={1000}>
        <div>
          <IconButton
            type="button"
            aria-label="search"
            sx={{
              display: { xs: 'inline', md: 'none' },
              align:'center',
              alignItems:'centre',
            }}
          >
            <SearchIcon />
          </IconButton>
        </div>
      </Tooltip>
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        slotProps={{
          input: {
            endAdornment: (
              <IconButton type="button" aria-label="search" size="small">
                <SearchIcon />
              </IconButton>
            ),
            sx: { pr: 0.5,width:550,borderRadius:4.8 },
          },
        }}
        sx={{ display: { xs: 'none', md: 'inline-block' }, mr: 1 }}
      /></div>
      <Login/>
      <ThemeSwitcher />
    </Stack>
  );
}

function SidebarFooter({ mini }) {
  return (
    <Typography
      variant="caption"
      sx={{ m: 1, whiteSpace: 'nowrap', overflow: 'hidden' }}
    >
      {mini ? '© YouTube' : `© ${new Date().getFullYear()} Made with love by Alex`}
    </Typography>
  );
}

SidebarFooter.propTypes = {
  mini: PropTypes.bool.isRequired,
};


DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function Dashboard(props) {
  const { window } = props;
  const [pathname, setPathname] = React.useState('/home');

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    // preview-start
    <AppProvider
    className="nat"
      navigation={NAVIGATION}
      branding={{
        logo: <img src="/youtube.png" alt="MUI logo" className='ho' />,
        title: 'YouTube',
        homeUrl: '/home',
        fontFamily:'Roboto',
        
      }}
      router={router}
      theme={demoTheme}
      window={demoWindow}
      >
      <DashboardLayout
      defaultSidebarCollapsed
        slots={{
          // appTitle: CustomAppTitle,
          toolbarActions: ToolbarActionsSearch,
          sidebarFooter: SidebarFooter,
        }}
        className='nat'
      >
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
