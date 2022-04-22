import React from 'react';
import GutterlessList from './skillList';
import Education from './Education';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';

function AboutMe(props) {
    return (
        <div>
           <h1 style={{
              display:'flex',
              justifyContent:'center',
              fontFamily:'cursive',
              backgroundColor:'#1976d2',
              borderRadius:'7px',
              width:'700px',
              margin:'auto',
              marginTop:'20px',
              marginBottom:'20px'
           }}><b>AboutMe</b></h1> 
        
        <div style={{
            display:'flex',
           fontFamily:'cursive',
           justifyContent:'center',
           width:'500px',
           margin:'auto'

        }}>
           <h3>Hello
My name is Sajjad
I was born in 1995 and I am 26 years old
I have been working in programming for 6 months and I am very eager to learn and progress in this field. I need a professional team so that I can increase my abilities if you needed a talented colleague with a team spirit. I can help you
           </h3> 
          <div/> 
        </div>
        <div>
           <h1 style={{
              display:'flex',
              justifyContent:'center',
              fontFamily:'cursive',
              backgroundColor:'#1976d2',
              borderRadius:'7px',
              width:'700px',
              margin:'auto',
              marginTop:'20px',
              marginBottom:'20px'
           }}><b>Skills</b></h1>
           <GutterlessList/>
         </div>
         <div>
        <h1 style={{
              display:'flex',
              justifyContent:'center',
              fontFamily:'cursive',
              backgroundColor:'#1976d2',
              borderRadius:'7px',
              width:'700px',
              margin:'auto',
              marginTop:'20px',
              marginBottom:'20px'
           }}><b>Education</b></h1>
           <Education/>
         </div> 
         <div>
         <h1 style={{
              display:'flex',
              justifyContent:'center',
              fontFamily:'cursive',
              backgroundColor:'#1976d2',
              borderRadius:'7px',
              width:'700px',
              margin:'auto',
              marginTop:'20px',
              marginBottom:'20px'
           }}><b>Email&phone</b></h1>
           <div style={{
              display:'flex',
              justifyContent:'center',
           }} >
              <MarkunreadOutlinedIcon sx={{color:'#1976d2'}} style={{
                 marginTop:'20px',
                 marginRight:'15px'
              }}/>
           <h2 style={{
              fontFamily:'cursive',
           }}>sajjadramezani780@gmail.com</h2>
           </div>
           <div style={{
              display:'flex',
              justifyContent:'center',
           }} >
              <PhoneInTalkOutlinedIcon sx={{color:'#1976d2'}} style={{
                 marginTop:'20px',
                 marginRight:'15px'
              }}/>
           <h2 style={{
              fontFamily:'cursive',
           }}>+98-9028679178</h2>
           </div>
           
            </div> 
        </div>
       
    );
}

export default AboutMe;