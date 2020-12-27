import React from 'react'
import Sdata from './Sdata'
import log from './download.jpg'
import Card from "./Card.jsx"
let heading ='This is list of top 5 Amazon Show'
const Amazon =() =>{
return (

    <Card 
     key ={Sdata[4].id}
      imgsrc = {log} 
      title= "A netflix Original Series" 
      sname ={Sdata[4].sname} 
      link={Sdata[4].link}
      heading ={heading}
      />
    
      
  )
}

export default Amazon