import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logoImage from './buksu_logo.png';
import Grid from "@mui/material/Grid";
import Paper from '@mui/material/Paper';
// import { useState, useEffect } from 'react';

export default function ButtonAppBar() {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // Update every second

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    const formattedTime = currentTime.toLocaleTimeString();

    const HeadeStyle = {
        backgroundColor: '#063970',
        // textAlign: 'center',
        padding: '10px',
        position: 'fixed',
        top: '0',
        width: '100%',
    };

    return (
        <Paper elevation={3} style={{ padding: '8px', marginBottom: '20px', backgroundColor: '#063970' }}>
            <Grid container alignItems="center" justifyContent="space-between">
                {/* Logo */}
                <Grid item>
                    <img src={logoImage} alt="Logo" style={{ width: '50px', height: '50px' }} />
                </Grid>

                {/* Title */}
                <Grid item>

                    <Typography variant="h6" container justifyContent="flex-start" style={{
                        padding: '0px',
                        height: 'auto',
                        color: '#E6A13A',
                        fontWeight: 'bold',
                        fontSize: '2em'
                    }}>
                        Smart BukSU Gateway Access Monitoring
                    </Typography>
                </Grid>

                {/* Date */}
                <Grid item>
                    <Typography style={{
                        padding: '0px',
                        height: 'auto',
                        color: '#ffffff',
                        fontWeight: 'bold',
                        fontSize: '1.5em'
                    }}>
                        {formattedTime}
                    </Typography>
                    <Typography variant="body2" style={{
                        padding: '0px',
                        height: 'auto',
                        color: '#ffffff',
                        fontWeight: 'bold',
                        fontSize: '1em'
                    }}>
                        {new Date().toLocaleDateString()}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
        // <Box sx={{ flexGrow: 1 }} style={HeadeStyle}>
        //     <Toolbar>
        //
        //         <Grid container justifyContent="space-between" spacing={1}>
        //             <img src={logoImage} alt="Logo" style={{maxWidth: '4%', padding: '5px', height: 'auto'}}/>
        //
        //             <Typography variant="h6" container justifyContent="flex-start" style={{
        //                 padding: '5px',
        //                 height: 'auto',
        //                 color: '#E6A13A',
        //                 fontWeight: 'bold',
        //               fontSize: '2em'
        //             }}>
        //
        //                 Smart BukSU Gateway Access Monitoring
        //             </Typography>

        //
        //             <Typography variant="h5" container justifyContent="flex-end">
        //                 <Typography>
        //                     {formattedTime}
        //                 </Typography>
        //                 <Typography>
        //                     {formattedTime}
        //                 </Typography>
        //
        //
        //             </Typography>
        //
        //         </Grid>
        //
        //     </Toolbar>
        //
        // </Box>



        // <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        //     <Grid container alignItems="center" justifyContent="space-between">
        //         {/* Logo */}
        //         <Grid item>
        //             <img src="your_logo_url.png" alt="Logo" style={{ width: '50px', height: '50px' }} />
        //             Your Title
        //
        //         </Grid>
        //
        //         {/* Title */}
        //         <Grid item>
        //             <Typography variant="h6">
        //                 Your Title
        //             </Typography>
        //         </Grid>
        //
        //         {/* Date */}
        //         <Grid item>
        //             <Typography variant="body2">
        //                 {new Date().toLocaleDateString()}
        //             </Typography>
        //         </Grid>
        //     </Grid>
        // </Paper>


    );
}