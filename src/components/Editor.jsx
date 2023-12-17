import React from 'react'
import { useState } from 'react';

import {Controlled as ControlledEditor} from 'react-codemirror2'
import{Box,styled} from '@mui/material'


import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import '../App.css'

const Container=styled(Box)`
  flex-grow:1;
  flex-basic:0;
  display:flex;
  flex-direction:column;
  padding:0 8px 8px;
`

const Heading=styled(Box)`
background:#1d1e22;
display:flex;
padding:9px 12px;


`

const Header=styled(Box)`
display:flex; 
background:#060606;
color: #AAAEBC;
justify-content: space-between;
font-weight:700;
`
const closeLogo='https://1000logos.net/wp-content/uploads/2019/05/Off-White.jpg'

export default function Editor({heading,icon,color,onchange,value}) {
  
  const [open,setOpen]=useState(true)

  const handleChange=(editor,data,value)=>{
    
    onchange(value);
    
  }
  
  
  return (
    <Container style={open ? null :{flexGrow:0}}>
      <Header>
         <Heading>
            <Box 
                component='span'
                style={{
                    background:color,
                    height:20,
                    width:20,
                    display:'flex',
                    placeContent:'center', 
                    borderRadius:5,
                    marginRight:5,
                    paddingBottom:2,
                    color: 'black',
                }}
                >
             {icon}
            </Box>
            {heading}
         </Heading>
         <img src={closeLogo} alt="logo" fontSize="small" style={{width:30,height:20,alignSelf:'center'}} 
          onClick={()=>setOpen(prevState=>!prevState)}
          />
      </Header>
      <ControlledEditor
         onBeforeChange={handleChange}
         value={value}
         className="controlled-editor"
         options={{
          theme: 'material',
          lineNumbers: true
        }}
      />
    </Container>
  )
}
