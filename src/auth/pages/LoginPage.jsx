import { Link as RouterLink } from 'react-router-dom'

import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {
  return (
    <>

    <AuthLayout title='Login'>
    <form>
                  <Grid container>
                    <Grid item xs={ 12 } sx={{ mt: 2}}>
                      <TextField 
                            label="Email" 
                            placeholder='Email@hotmail.com'
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

                        <Grid item xs={ 12 } sm={ 6 } md={6} >
                          <Button type="submit" 
                                  variant="contained"  fullWidth
                                  color="primary">Login
                          </Button>
                        </Grid>
                        <Grid item xs={ 12 } sm={ 6 } md={ 6 } >
                          <Button type="submit" 
                                  variant="contained"  fullWidth
                                  color="primary">

                              <Google />
                            <Typography sx={{ ml: 1}}> Google </Typography>  
                          </Button>
                        </Grid>
                    </Grid>

                    <Grid  container direction="row" justifyContent='end'> 
                      <Link component={ RouterLink } color='inherit' to="/auth/register">
                      Sign up 
                      </Link>
                 </Grid>

                  </Grid>
                </form>
    </AuthLayout>
   
    </>
  )
}
