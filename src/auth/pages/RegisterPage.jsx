import { Link as RouterLink } from 'react-router-dom'

import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
    <>

    <AuthLayout title='Sign Up'>
    <form>
                  <Grid container>
                    <Grid item xs={ 12 } sx={{ mt: 2}}>
                      <TextField 
                            label="Full Name" 
                            placeholder='Milo jose'
                            type="text"
                            fullWidth/>
                    </Grid>

                    <Grid item xs={ 12 } sx={{ mt: 2}}>
                      <TextField 
                            label="Email" 
                            placeholder='Email'
                            type="email"
                            fullWidth/>
                    </Grid>
                    <Grid item xs={ 12 } sx={{ mt: 2}}>
                      <TextField 
                            label="Password" 
                            placeholder='Password'
                            type="password"
                            fullWidth/>
                    </Grid>

                    <Grid container spacing={ 2 } sx={{ mb: 2, mt: 3}}> 

                        <Grid item xs={ 12 } >
                          <Button type="submit" 
                                  variant="contained"  fullWidth
                                  color="primary"> Create Account
                          </Button>
                        </Grid>
                       
                    </Grid>

                    <Grid  container direction="row" justifyContent='end'> 
                    <Typography sx={ {mr:1} }> Already have an account?</Typography>
                      <Link component={ RouterLink } color='inherit' to="/auth/login">
                      Login
                      </Link>
                 </Grid>

                  </Grid>
                </form>
    </AuthLayout>
   
    </>
  )
}
