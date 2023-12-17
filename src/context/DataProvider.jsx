import {createContext,useState} from 'react'

export const DataContext=createContext(null); //initialise

const DataProvider= ({children})=>{

    const [html,setHtml]=useState('');
    const [css,setCss]=useState('');
    const [js,setJs]=useState('');
    return (
        <DataContext.Provider value={                                //return context...provider exports value stored
            {
              html,                               //exported state
              setHtml,
               css,
               setCss,
               js,
               setJs
            }
          }
          >
           {children}
        </DataContext.Provider>
    )
}

export default DataProvider;