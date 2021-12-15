import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Navbar from './Navbar';

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
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <h1>Welcome</h1>
              <h2>Find your learning resources easily!</h2>
              <Button variant="contained" color="primary">
                Login
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
