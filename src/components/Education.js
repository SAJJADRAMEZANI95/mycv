import React from 'react';
import {TextField} from '@mui/material'

function Education(props) {
    return (
        <div>
            <div style={{
              display:'flex',
              justifyContent:'center',
              marginBottom:'50px',
              marginTop:'50px'
           }}>
           <TextField
          id="outlined-read-only-input"
          label="High school:"
          defaultValue="Shahid Rajaee/ّField:Mathematics and physics"
          InputProps={{
            readOnly: true,
          }}
          multiline
          sx={{
             width:'500px'
          }}
        />
        
        </div>
        <div style={{
              display:'flex',
              justifyContent:'center',
              marginBottom:'50px',
              marginTop:'50px'
           }}>
           <TextField
          id="outlined-read-only-input"
          label="University"
          defaultValue="Azad University of Tehran Center/ّField:COMPUTER-AIDED SOFTWARE ENGINEERING  but Withdraw from university after 2 years"
          InputProps={{
            readOnly: true,
          }}
          multiline
          sx={{
             width:'500px',
          }}
        />
        </div>
           
            
        </div>
    );
}

export default Education;