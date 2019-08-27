import React, { useEffect,useState } from 'react';
import {withRouter} from 'react-router-dom'
import Header from '../components/Header'

const HeaderContainer=(props)=> {
  const {location}=props
  const [showIcon,setShowIcon]=useState(true)
  const [showButton,setShowButton]=useState(true)

  useEffect(
    ()=>{
      let page=location.pathname.split("/").slice(-1)[0]
     page=="new"?setShowIcon(false):setShowIcon(true);
     page=="posts"?setShowButton(false):setShowButton(true);
    
    },[location]
  )
  return <Header 
            showButton={showButton}
            showIcon={showIcon}
          />
}
export default withRouter(HeaderContainer) 