import './Content.css'
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Avatar from '@mui/material/Avatar';

const data = [
  {
    src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
    title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
    channel: 'Don Diablo',
    icon:<Avatar alt="Don Diablo" src="/static/images/avatar/1.jpg" />,
    views: '396k views',
    createdAt: 'a week ago',
  },
  {
    src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
    title: 'Queen - Greatest Hits',
    channel: 'Queen Official',
    icon:<Avatar alt="Queen Official" src="/static/images/avatar/2.jpg" />,
    views: '20M views',
    createdAt: '1 years ago',
  },
  {
    src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
    title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
    channel: 'Calvin Harris',
    icon:<Avatar alt="Calvin Harris" src="/static/images/avatar/1.jpg"/>,
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
            <img
              style={{ width: 400, height: 248,borderRadius:12, cursor:'pointer'}}
              alt={item.title}
              src={item.src}
            />
          ) : (
            <Skeleton variant="rectangular" className='spe' width={400} height={248} animation='wave'sx={{borderRadius:3,cursor:'pointer'}}/>
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
                sx={{ display: 'block', color: 'text.secondary',textAlign:'start',cursor:'pointer', }}
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
