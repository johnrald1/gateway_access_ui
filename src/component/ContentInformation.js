import * as React from 'react';
import Grid from '@mui/material/Grid';
// import Marquee from 'react-marquee-line';

export default function ButtonAppBar() {



    return (
        <Grid container spacing={2} style={{ paddingLeft: '10px',paddingRight: '10px', backgroundColor: '#ffffff' }}>
            <Grid item xs={3}
                  sx={{
                      width: '100%',
                      height: '100vh', // Set height to 100% of the viewport height
                      backgroundColor: '#f0f0f0',
                      padding: '20px',
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                  }}>
                This is a full-width and full-height box.
            </Grid>
            <Grid item xs={3}
                  sx={{
                      width: '100%',
                      height: '100vh', // Set height to 100% of the viewport height
                      backgroundColor: '#f0f0f0',
                      padding: '20px',
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                  }}>
                This is a full-width and full-height box.
            </Grid>
            <Grid item xs={3}
                  sx={{
                      width: '100%',
                      height: '100vh', // Set height to 100% of the viewport height
                      backgroundColor: '#f0f0f0',
                      padding: '20px',
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                  }}>
                This is a full-width and full-height box.
            </Grid>
            <Grid item xs={3}
                  sx={{
                      width: '100%',
                      height: '100vh', // Set height to 100% of the viewport height
                      backgroundColor: '#f0f0f0',
                      padding: '20px',
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                  }}>
                This is a full-width and full-height box.
            </Grid>

        </Grid>

    );
}