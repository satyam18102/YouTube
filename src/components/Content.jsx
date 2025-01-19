import './Content.css'
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Avatar from '@mui/material/Avatar';

const data = [
  {
    src: 'https://i.ytimg.com/vi/JRKk7gxcpMc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAcAZTxMFrGR68joNwDIknXPaaldQ',
    title: 'O Sajna (Official Video) - Badshah X DIVINE X Nikhita Gandhi | Ek THA RAJA',
    channel: 'Badshah',
    icon:<Avatar alt="Badshah" src="/static/images/avatar/1.jpg" />,
    views: '396k views',
    createdAt: 'a week ago',
  },
  {
    src: 'https://i.ytimg.com/vi/AmrRPNwrGQU/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYZSBXKEkwDw==&rs=AOn4CLDsDl7BQpwYCYBSxl4u5mRYNNTVFQ',
    title: 'Glassy | Yo Yo Honey Singh & Ashok Mastie | Channi Rakhala | Vinnil Markan | 1st Song',
    channel: 'Yo Yo Honey',
    icon:<Avatar alt="Yo Yo" src="/static/images/avatar/2.jpg" />,
    views: '20M views',
    createdAt: '1 years ago',
  },
  {
    src: 'https://i.ytimg.com/vi/xrWuLKers6s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgoC2JygrPU_5eHmPFzpsbXWZ3uw',
    title: 'Dhanda Nyoliwala - Russian Bandana (Music Video) | Deepesh Goyal | VYRL Haryanvi',
    channel: 'T-series',
    icon:<Avatar alt="T" src="/static/images/avatar/1.jpg"/>,
    views: '130M views',
    createdAt: '10 months ago',
  },
];

function Media(props) {
  const { loading = false } = props;

  return (
    <Grid container wrap="nowrap" className='fex' row='2' coloumn='2'>
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        <Box key={index} sx={{ width: 420, marginRight: 2, my: 5 }}>
          {item ? (
            <div>
            <img
              style={{ width: 400, height: 248,borderRadius:12, cursor:'pointer',}}
              alt={item.title}
              src={item.src}
              className='radius'
            />
            <div className='flex mt-3'>
              <div>
            <Typography
                variant="caption"
                sx={{ display: 'block', color: 'text.secondary',textAlign:'start' }}
              >
                {item.icon}
              </Typography>
              </div>
              <div className='ml-3' >
              <Typography gutterBottom variant="body2" sx={{textAlign:'start',cursor:'pointer',}}>
                {item.title}
              </Typography>
              <Typography
                variant="caption"
                className='a'
                sx={{ display: 'block', color: 'text.secondary',textAlign:'start',cursor:'pointer','&:hover': { color: 'primary.main' }}}
              >
                <a>{item.channel}</a>
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary',textAlign:'start',float:'left' }}>
                {`${item.views} • ${item.createdAt}`}
              </Typography>
              </div></div>
            <img
              style={{ width: 400, height: 210,borderRadius:12, cursor:'pointer'}}
              alt={item.title}
              src='/tmkoc.png'
              className='mt-12'
            />
            </div>
          ) : (
            <Skeleton variant="rectangular" className='spe' width={400} height={248} animation='wave'sx={{borderRadius:3,cursor:'pointer',}}/>
          )}
          {item ? (
            <Box sx={{ pr: 2 }}>
              <div className='flex'>
                <div className='mt-4'>
                <Typography
                variant="caption"
                sx={{ display: 'block', color: 'text.secondary',textAlign:'start' }}
              >
                {item.icon}
              </Typography>
                </div>
                <div className='ml-3 mt-2'>
              <Typography gutterBottom variant="body2" sx={{textAlign:'start',cursor:'pointer'}}>
                {item.title}
              </Typography>
              <Typography
                variant="caption"
                className='a'
                sx={{ display: 'block', color: 'text.secondary',textAlign:'start',cursor:'pointer','&:hover': { color: 'primary.main' }}}
              >
                <a>{item.channel}</a>
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary',textAlign:'start',float:'left' }}>
                {`${item.views} • ${item.createdAt}`}
              </Typography>
              </div>
              </div>
            </Box>
          ) : (
            <Box sx={{ pt: 0.5 }}>
              <Skeleton width='80%' />
              <Skeleton width="60%" />
            </Box>
          )}
        </Box>
      ))}
    </Grid>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function Content() {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Media />
      <Media loading />
    </Box>
  );
}
