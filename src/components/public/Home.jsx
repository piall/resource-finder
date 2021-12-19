import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { DiJavascript1 } from 'react-icons/di';

import styles from './Home.module.scss';
import Navbar from './Navbar';
import Footer from '../common/Footer';

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
                  Sign Up
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <img src="/illustrations/search.svg" />
              </Grid>
            </Grid>
          </section>
          <section id="About" className={styles.section}>
            <div className="title">
              <h1>About</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              commodi voluptate doloremque! Cupiditate nostrum unde perferendis!
              Qui, nobis quis repellat quasi inventore illum, iure eaque
              asperiores mollitia pariatur consectetur doloremque!
            </p>
          </section>
          <section id="Topics" className={styles.section}>
            <div className="title">
              <h1>TOPICS</h1>
            </div>
            <div className={styles.topics}>
              <Grid container alignItems="center" spacing={2}>
                <Grid item xs={3}>
                  <DiJavascript1 />
                </Grid>
                <Grid item xs={3}>
                  <DiJavascript1 />
                </Grid>
                <Grid item xs={3}>
                  <DiJavascript1 />
                </Grid>
              </Grid>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
