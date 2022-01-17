import { useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Toaster } from 'react-hot-toast';

import Navbar from '../src/components/public/Navbar';
import Footer from '../src/components/common/Footer';
import AxiosMethod from '../src/axios/AxiosMethod';
import { API_SignUp } from '../src/routes/apiRoute';

export default function SignUp() {
  //state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [toastStatus, setToastStatus] = useState(false);

  //handler
  const signUpHandler = async () => {
    setLoading(true);
    setToastStatus(true);
    const data = {
      name,
      email,
      password,
    };
    await AxiosMethod.postData(
      API_SignUp,
      data,
      'Successfully Created Account'
    );
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
                label="Name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
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
              <TextField
                required
                fullWidth
                label="Confirm Password"
                placeholder="Retype Password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" onClick={signUpHandler}>
            Sign Up
          </Button>
          {loading && <CircularProgress />}
        </div>
      </div>
      <Footer />
    </div>
  );
}
