import Link from 'next/link';
import { useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Toaster } from 'react-hot-toast';

import Navbar from '../src/components/public/Navbar';
import Footer from '../src/components/common/Footer';
import AxiosMethod from '../src/axios/AxiosMethod';
import { API_SignIn } from '../src/routes/apiRoute';

export default function SignIn() {
  //state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [toastStatus, setToastStatus] = useState(false);

  //handler
  const signInHandler = async () => {
    setLoading(true);
    setToastStatus(true);
    const data = {
      email,
      password,
    };
    await AxiosMethod.postData(API_SignIn, data);
    setLoading(false);
  };

  return (
    <div>
      {toastStatus && <Toaster position="top-center" reverseOrder={false} />}
      <Navbar />
      <div className="page-container-scroll">
        <div className="page-container registration">
          <Grid container alignItems="center">
            <Grid item xs={12} md={6}>
              <img src="/logo.svg" alt="logo" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                label="Email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <TextField
                required
                fullWidth
                label="Password"
                placeholder="Your Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" onClick={signInHandler}>
            Sign In
          </Button>
          <p style={{ marginTop: '10px' }}>
            Don't have an account?{' '}
            <Link href="/signup">
              <span className="link blue">Sign Up</span>
            </Link>
          </p>
          {loading && <CircularProgress />}
        </div>
      </div>
      <Footer />
    </div>
  );
}
