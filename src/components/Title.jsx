import React from 'react';
import Typography from "@mui/material/Typography";

const Title = ({title,caption}) => {
    return (
        <div style={{display:'flex',flexDirection:'column',alignItems:'start',marginBottom:'20px'}}>
            <Typography variant="title" fontWeight='bold' fontFamily={'roboto'} letterSpacing={2} color="primary">
                {title.toUpperCase()}
            </Typography>
            <Typography variant="body2" fontFamily={'roboto'} fontWeight="light" letterSpacing={1.5} color="secondary.light" style={{marginTop:'-5px',marginLeft:'3px'}}>
            {caption}
            </Typography>
        </div>
    );
}

export default Title;
