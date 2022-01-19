import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { DiJavascript1 } from 'react-icons/di';

import styles from './Home.module.scss';
import Navbar from './Navbar';
import Footer from '../common/Footer';
import Topics from '../private/topic/Topics';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function PublicHome() {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <div className="page-container-scroll">
        <div className="page-container">
          <section id="Home" className={styles.top_section}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={12} md={6}>
                <h1>Hi!</h1>
                <p>Find your learning resources easily with us!</p>
                <Button variant="contained" color="primary">
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <img src="/illustrations/search.svg" alt="search" />
              </Grid>
            </Grid>
          </section>
          <section id="About" className={styles.section}>
            <div className="title">
              <h1>About</h1>
            </div>
            <p>
              Resource Finder aims those people who learns topic by searching on
              search engine. But search engine has not made for learning
              purpose. This platform tries to solve this problem. Anyone can
              share any resources other can vote those for learning level by
              doing that each one helps each other to know which topic is for
              which learning level
            </p>
          </section>
          <section id="Topics" className={styles.section}>
            <div className="title">
              <h1>TOPICS</h1>
            </div>
            <Topics />
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
