import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import {Box,styled} from '@mui/material'

import {DataContext} from '../context/DataProvider'

const Container=styled(Box)`
height:47vh;
`

export default function Result() {

  const [src,setSrc]=useState('')
    const {html,css,js}=useContext(DataContext)||{};;

    const srcCode= `
       <html>
         <body>${html}</body>
         <style>${css}</style>
         <script>${js}</script>
       </html>
    
    `

    useEffect(()=>{
           const timeout=setTimeout(()=>{
              setSrc(srcCode);
           },1500)

           return ()=>clearTimeout(timeout)
    },[html,css,js])
  return (
    <Container>
        <iframe
           srcDoc={src}
           title="Output"
           sandbox='allow-scripts'
           frameBorder="0"
           width="100%"
           height="100%"
       />
    </Container>
  )
}
