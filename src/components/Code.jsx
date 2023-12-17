import React from 'react'
import { useContext } from 'react'
import Editor from './Editor'
import {Box,styled} from '@mui/material'
import { DataContext } from '../context/DataProvider'

const Container=styled(Box)`
   
   background-color: #060606;
   height:57vh;
   display:flex;
`
export default function Code() {

   const { html,css,js,setHtml,setCss,setJs }= useContext(DataContext) || {};
  return (
    <Container>
      <Editor  
         heading="HTML"
         icon="/"
         color="#FF3C41"
         value={html}
         onchange={setHtml}
         />
      <Editor 
         heading="CSS"
         icon="*"
         color="#0EBEFF"
         value={css}
         onchange={setCss}
         />
      <Editor 
         heading="JS"
         icon="()"
         color="#FCD000"
         value={js}
         onchange={setJs}
         />
    </Container>
  )
}
