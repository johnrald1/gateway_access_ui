// import React from 'react';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
//
// const TrapeziumComponent = () => {
//     const trapeziumStyle = {
//         width: 0,
//         borderTop: '50px solid #2196F3', // Adjust the color as needed
//         borderLeft: '0px solid transparent',
//         borderRight: '50px solid transparent',
//     };
//
//     return (
//         <Paper  style={trapeziumStyle}>
//             <Typography variant="">
//             </Typography>
//         </Paper>
//     );
// };
//
// export default TrapeziumComponent;




import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const Footer = () => {

    const trapeziumStyle = {
        width: 0,
        borderTop: '50px solid #2196F3', // Adjust the color as needed
        borderLeft: '0px solid transparent',
        borderRight: '50px solid transparent',
    };

    return (
        <Grid container spacing={2}>
            {/* Column 1 */}
            <Grid item xs={2} style={{ padding: '20px',
                backgroundColor: '#E6A13A',
                borderTop: '50px solid #2196F3',
                borderRight: '50px solid transparent'}}>
                <Typography variant="body2">
                    Announcement
                </Typography>
            </Grid>

            {/* Column 2 */}
            <Grid item xs={10} style={{ padding: '20px', backgroundColor: '#ffffff' }}>
                <Typography variant="body2">
                    Section 2: Content for the second column of the footer.
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Footer;
