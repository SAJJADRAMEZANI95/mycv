import React from 'react';
import {Box,Grid} from '@mui/material';
import MediaCard from './Cards';
import mypic from '../mypic.jpg';
import wetherapp from '../wetherapp.png'

function Projects(props) {
    return (
        <div style={{
            display:'flex',
            justifyContent:'center',
            marginTop:'30px'
        }}>
            <div style={{
                marginRight:'13rem'
            }}>
                <div style={{marginBottom:'30px',width:'300px'}}>
                   <MediaCard img={wetherapp} alt={'WetherApp'} title={'WetherApp'} info={'this is a wetherapp'} url={"https://harmonious-meerkat-1e34f8.netlify.app/"}/> 
                </div>
                <div>
                   <MediaCard img={mypic} alt={'WetherApp'} title={'WetherApp'} info={'this is a wetherapp'} url={"https://harmonious-meerkat-1e34f8.netlify.app/"}/> 
                </div>
             </div>
            <div>
            <div style={{marginBottom:'30px',width:'300px'}}>
                   <MediaCard img={mypic} alt={'WetherApp'} title={'WetherApp'} info={'this is a wetherapp'} url={"https://harmonious-meerkat-1e34f8.netlify.app/"}/> 
                </div>
                <div>
                   <MediaCard img={mypic} alt={'WetherApp'} title={'WetherApp'} info={'this is a wetherapp'} url={"https://harmonious-meerkat-1e34f8.netlify.app/"}/> 
                </div>
            </div>
            
            



        </div>
    );
}

export default Projects;