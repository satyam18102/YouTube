import './Content.css'
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Avatar from '@mui/material/Avatar';

const data = [
  {
    src: '/sajna.png',
    title: 'O Sajna (Official Video) - Badshah X DIVINE X Nikhita Gandhi | Ek THA RAJA',
    channel: 'Badshah',
    icon:<Avatar alt="Badshah" src="https://yt3.ggpht.com/PtjQRphUor6aqUNtz98owoTLqB375TbAPWP9m78XnQKqYRFDL3gwAgVb1Crky10-1jdtOCMwzvE=s88-c-k-c0x00ffffff-no-rj" />,
    views: '396k views',
    createdAt: 'a week ago',
  },
  {
    src: '/tvf.png',
    title: 'Tower Ke Liye Meeting Meeting ft. Chandan Roy, Faisal Malik, Durgesh Kumar, Ashok Pathak',
    channel: 'The Viral Fever',
    icon:<Avatar alt="T" src="https://yt3.ggpht.com/ytc/AIdro_lMaG31N6SdaMEkagNlbn8Q7Ta3NV7eC2xhqpGF_MHoc-0=s88-c-k-c0x00ffffff-no-rj" />,
    views: '20M views',
    createdAt: '1 years ago',
  },
  {
    src: '/russia.png',
    title: 'Dhanda Nyoliwala - Russian Bandana (Music Video) | Deepesh Goyal | VYRL Haryanvi',
    channel: 'VYRL Haryanvi',
    icon:<Avatar alt="V" src="https://yt3.ggpht.com/3pvdhxAJoQgPaWCWsLnVkJLMQbVcZjITuwv3dDX3ToYcD5aEerO3oQ2ZIJJtXH8wRIBsK6L1Y0k=s88-c-k-c0x00ffffff-no-rj"/>,
    views: '130M views',
    createdAt: '10 months ago',
  },
];

const data2 = [
  {
    src: '/payal.png',
    title: 'PAYAL SONG (Official Video): YO YO HONEY SINGH | NORA FATEHI | PARADOX | GLORY | BHUSHAN KUMAR',
    channel: 'T-series',
    icon:<Avatar alt="T-series" src="https://yt3.ggpht.com/XE7Iq8jvJ07ptMc-HxZR_V-2XgXCb0i06i4E_dypl7xSR655WXaQeglfqNuEeuwH3oM9RKVodQ=s68-c-k-c0x00ffffff-no-rj" />,
    views: '396k views',
    createdAt: 'a week ago',
  },
  {
    src: 'https://i.ytimg.com/vi/qZId59qml_4/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDxGsDD7U6a7v2XA19ERmHE5TNnYw',
    title: '#Video | #Pawan Singh New Song | लाल घाघरा | Lal Ghaghra | Shilpi Raj | Namrita Malla| Bhojpuri Gana',
    channel: 'Saregama Hum Bhojpuri',
    icon:<Avatar alt="S" src="https://yt3.ggpht.com/1DrkG_kzGIIuGVwknM-x0_S62gcCmEoLTr1L524IWeXb0nSuw5XXb58AyA7RVR_tvNJv09pASQ=s88-c-k-c0x00ffffff-no-rj" />,
    views: '20M views',
    createdAt: '1 years ago',
  },
  {
    src: '/upsc.png',
    title: 'UPSC KI TAAIYAARI | HARSH RAJPUT',
    channel: 'Harsh Rajput',
    icon:<Avatar alt="H" src="https://yt3.ggpht.com/_zDjMUVYFvdCkPU5v6XOo_Ls2maFaHNqRM0esbAR_fRj8zlfGUCpr9Dkll7a30tmQ7Y2__zeQQ=s68-c-k-c0x00ffffff-no-rj"/>,
    views: '27M views',
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
              style={{ width: 397, height: 223,borderRadius:12, cursor:'pointer',}}
              alt={item.title}
              src={item.src}
              className='radius'
            />
          ) : (
            <Skeleton variant="rectangular" className='spe' width={400} height={248} animation='wave'sx={{borderRadius:3,cursor:'pointer',}}/>
          )}
          {item ? (
            <Box sx={{ pr: 2 }}>
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
                <Typography gutterBottom variant="body2" sx={{textAlign:'start',cursor:'pointer',fontSize:17,fontWeight:500}}>
                  {item.title}
                </Typography>
                <Typography
                  variant="caption"
                  className='a'
                  sx={{ display: 'block', color: 'text.secondary',textAlign:'start',cursor:'pointer',fontSize:14,'&:hover': { color: 'primary.main' }}}
                >
                  <a>{item.channel}</a>
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary',fontSize:14,textAlign:'start',float:'left' }}>
                  {`${item.views} • ${item.createdAt}`}
                </Typography>
                </div></div>
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

function Media2(prop) {
  const { load = false } = prop;

  return (
    <Grid container wrap="nowrap" className='fex' row='2' coloumn='2'>
      {(load ? Array.from(new Array(3)) : data2).map((item, index) => (
        <Box key={index} sx={{ width: 420, marginRight: 2, my: 5 }}>
          {item ? (
            <img
              style={{ width: 397, height: 223,borderRadius:12, cursor:'pointer',}}
              alt={item.title}
              src={item.src}
              className='radius'
            />
          ) : (
            <Skeleton variant="rectangular" className='spe' width={400} height={248} animation='wave'sx={{borderRadius:3,cursor:'pointer',}}/>
          )}
          {item ? (
            <Box sx={{ pr: 2 }}>
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
                <Typography gutterBottom variant="body2" sx={{textAlign:'start',cursor:'pointer',fontSize:17,fontWeight:500,}}>
                  {item.title}
                </Typography>
                <Typography
                  variant="caption"
                  className='a'
                  sx={{ display: 'block', color: 'text.secondary',textAlign:'start',fontSize:14,cursor:'pointer','&:hover': { color: 'primary.main' }}}
                >
                  <a>{item.channel}</a>
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary',fontSize:14,textAlign:'start',float:'left' }}>
                  {`${item.views} • ${item.createdAt}`}
                </Typography>
                </div></div>
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
      <Media2/>
      <Media loading />
    </Box>
  );
}
