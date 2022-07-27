import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
// import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { typography } from '@mui/system';
// import post1 from './blog-post.1.md';
// import post2 from './blog-post.2.md';
// import post3 from './blog-post.3.md';

const sections = [
  { title: 'Technology', url: 'https://www.nasa.gov/topics/technology/index.html' },
  { title: 'Designs', url: 'https://nasasearch.nasa.gov/search?query=designs&affiliate=nasa&utf8=%E2%9C%93' },
  { title: 'Planets', url: 'https://solarsystem.nasa.gov/planets/overview/' },
  { title: 'Our galaxy', url: 'https://solarsystem.nasa.gov/resources/285/the-milky-way-galaxy/' },
  { title: 'Black holes!?', url: 'https://www.nasa.gov/black-holes' },
  { title: 'Fun Space Facts', url: 'https://www.nasa.gov/stem-ed-resources/Extreme_Space_Facts.html' },
  { title: 'WEBB space telescope', url: 'https://webb.nasa.gov/' },
  { title: 'The International Space Station', url: 'https://www.nasa.gov/mission_pages/station/main/index.html' },
  { title: 'Space objects', url: 'https://solarsystem.nasa.gov/news/715/10-things-whats-that-space-rock/' },
  { title: 'Space Travel', url: 'https://www.nasa.gov/topics/technology/space-travel/index.html' },
];

const mainFeaturedPost = { 

  title: 'Did you know?',
  description:
    "The moon uses it's gravitational pull to control the tides!",
  image: 'https://media.nature.com/lw800/magazine-assets/d41586-022-00542-4/d41586-022-00542-4_20170070.jpg',
  imageText: 'main image description',
  linkText: 'Want to know more?',
};

const featuredPosts = [
  
  {
    title: 'Space object found!?!',
    date: 'June 12',
    description:
      'Aliens!?!',
    image: 'https://c.files.bbci.co.uk/5F60/production/_109061442_hi018470968.jpg',
    imageLabel: 'Image Text',
  },
  {
    title: 'Astronomeers discover light holes',
    date: 'June 25',
    description:
      'It spits out stuff instead of absorbing them.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8E_StNHdj9rp2_rPWjy9wTSxS-fCr0adIvg&usqp=CAU',
    imageLabel: 'Image Text',
  },
  {
    title: 'First moon landing',
    date: 'July 20, 1969',
    description:
      'Moon Landing!?!',
    image: 'https://i.ytimg.com/vi/S9HdPi9Ikhk/mqdefault.jpg',
    imageLabel: 'Image Text',
  }
];

// const posts = [post1, post2, post3];

const sidebar = { 
  title: 'About this website',
  description:
    'This websites is completly dedicated to space and all of the wonders it has in store for us.',
    archives: [
    { title: 'January 2021', url: '#' },
    { title: 'February 2021', url: '#' },
    { title: 'March 2021', url: '#' },
    { title: 'April 2021', url: '#' },
    { title: 'May 2021', url: '#' },
    { title: 'June 2021', url: '#' },
    { title: 'July 2021', url: '#' },
    { title: 'August 2021', url: '#' },
    { title: 'September 2021', url: '#' },
    { title: 'October 2021', url: '#' },
    { title: 'November 2021', url: '#' },
    { title: 'December 2021', url: '#' },
    
  ],
  
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title= "Space Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            {/* <Main title="From the firehose" posts={posts} /> */}
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Space related quotes!"
        description="Space the final frontier -Star trek"
      />
    </ThemeProvider>
  );
}